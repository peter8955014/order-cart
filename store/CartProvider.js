import { useReducer } from 'react'

import CartContext from './cart-context'

const defaultCartState = {
  item: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount

    const existCartItemIndex = state.item.findIndex(
      item => item.id === action.item.id) // 確保新增的值已經存在

    const existCartItem = state.item[existCartItemIndex]
    console.log(existCartItemIndex);

    let updateItems

    if (existCartItem) {
      const updateItem = {
        ...existCartItem,
        amount: existCartItem.amount + 1
      }
      updateItems = [...state.item]
      updateItems[existCartItemIndex] = updateItem
      // 對於重複的用 updateItem 覆蓋,僅改變 amount
    } else {
      updateItems = [...state.item, action.item]
      // 尚未出現的值會被加入到 updateItems
    }

    return {
      item: updateItems,
      totalAmount: updateTotalAmount
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    const existCartItemIndex = state.item.findIndex(
      item => item.id === action.id
    )
    const existCartItem = state.item[existCartItemIndex]
    console.log(existCartItem)
    const updateTotalAmount = state.totalAmount - existCartItem.price

    let updateItems
    if (existCartItem.amount === 1) {
      updateItems = state.item.filter((item) => item.id !== action.id)
    } else {
      const updateItem = { ...existCartItem, amount: existCartItem.amount - 1 }
      updateItems = [...state.item]
      updateItems[existCartItemIndex] = updateItem
    }// 當項目值只剩一個時 下一次要移除整個項目

    return {
      item: updateItems,
      totalAmount: updateTotalAmount
    }
  }

  return defaultCartState
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

  const addItemToCarHandler = (item) => {
    dispatchCart({ type: 'ADD_ITEM', item: item })
  }
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: 'REMOVE_ITEM', id: id })
  }

  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarHandler,
    removeItem: removeItemFromCartHandler
  }

  return <CartContext.Provider value={cartContext}>
    {children}
  </CartContext.Provider>
}

export default CartProvider
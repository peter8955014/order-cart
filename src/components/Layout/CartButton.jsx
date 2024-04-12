import React, { useContext, useEffect, useState } from 'react'

import classbutton from './CartButtom.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const CartButton = ({ onselect }) => {
  const [btnHighlight, setBtnHighLight] = useState(false)
  const cartCtx = useContext(CartContext)

  const numberOfCartItem = cartCtx.item.reduce(
    (curNumber, item) => {
      return curNumber + item.amount
    }, 0)

  const btnClass = `${classbutton.button} ${btnHighlight ? classbutton.bump : ''}`

  useEffect(() => {
    if (cartCtx.item.length === 0) {
      return
    }
    setBtnHighLight(true)
    // 效果沒有關閉一直開著,要重複使用就要先 false

    const timer = setTimeout(() => {
      setBtnHighLight(false)
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [cartCtx.item])

  return (
    <button
      className={btnClass}
      onClick={onselect}
    >
      <span className={classbutton.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classbutton.badge}>
        {numberOfCartItem}
        {/* 顯示總項目數量 */}
      </span>
    </button>
  )
}

export default CartButton
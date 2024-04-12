import { useContext } from 'react'

import classes from './Cart.module.css'
import CartItem from './CartItem'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'


const Cart = ({ onselect }) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItem = cartCtx.item.length > 0

  const cartItemRemoveHandler = item => {
    cartCtx.removeItem(item)
  }

  const cartItemAddHandler = id => {
    cartCtx.addItem(id)
  }

  const cartItem = (
    <ul className={classes['cart-item']}>
      {cartCtx.item.map((item) => {
        console.log(item)
        return (
          <CartItem 
          key={item.id} 
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)} 
          onAdd={cartItemAddHandler.bind(null, item)}
          />
        )
      })}
    </ul>)



  return (
    <Modal onCartOff={onselect}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.action}>
        <button
          className={classes['button--alt']}
          onClick={onselect}
        >Close</button>
        <button
          className={classes.button}
          disabled={!hasItem}
        >Order</button>
      </div>
    </Modal>
  )
}

export default Cart
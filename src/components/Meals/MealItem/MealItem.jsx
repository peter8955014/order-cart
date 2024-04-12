import { useContext } from 'react'

import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext)
  const price = `$${meal.price.toFixed(2)}`

  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount, // 購物車物品數量
      price: meal.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={handleAddToCart} />
      </div>
    </li>
  )
}

export default MealItem
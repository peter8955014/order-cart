import { useRef } from 'react'

import classes from './MealItemForm.module.css'
import Input from './Input'


const MealItemForm = ({onAddToCart}) => {
  const amountInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()

    const enterAmount = amountInputRef.current.value
    const enterAmontNumber = +enterAmount

    onAddToCart(enterAmontNumber)
  }

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
    >
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'Amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
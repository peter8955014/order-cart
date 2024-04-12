import { forwardRef } from 'react'
import classes from './Input.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label
        htmlFor={props.input.id}
        className={classes.label}
      >
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        required
      />
    </div>
  )
})

export default Input
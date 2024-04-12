import React from 'react'
import classes from './Header.module.css'
import meal from '../../assets/meals.jpg'
import CartButton from './CartButton'

const Header = ({onselect}) => {
  return (
    <>
      <header className={classes['header']}>
        <h1>React Order</h1>
        <CartButton onselect={onselect}/>
      </header>
      <div className={classes['main-image']}>
        <img src={meal} alt='meal'/>
      </div> 
    </>
  )
}

export default Header
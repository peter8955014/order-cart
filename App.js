import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import CartProvider from "./store/CartProvider";



function App() {
  const [cartShow, setCartShow] = useState(false)

  const handleCartShow = () => {
    setCartShow((prevState) => !prevState)
  }

  return (
    <CartProvider>
      {cartShow && <Cart onselect={handleCartShow}/>}
      <Header onselect={handleCartShow}/>
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;

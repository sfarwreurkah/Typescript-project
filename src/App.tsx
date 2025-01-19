import { useState } from "react";
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";

function App(){
    const [cartItems, setCartItems] = useState(['product1' , 'prouct2'])

    return (
   <div>
    <Navbar cartItemsCount={cartItems.length } />
    <Cart cartItems= {cartItems} onClear={() => setCartItems ([])} /> 
   </div>

    );
}


export default App;
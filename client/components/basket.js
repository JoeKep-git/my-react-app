//basket.js
//TODO: NEEDS CHANGING TO WORK WITH THE POST REQUEST. WHEN BUTTON CLICKED, TAKE TO NEW PAGE THAT GETS THE SESSION STORAGE OF THE CART ITEMS AND DISPLAYS THEM. 
//TODO: THEN HAVE A BUTTON TO CONFIRM ORDER. THIS WILL THEN POST THE ORDER TO THE DATABASE AND CLEAR THE SESSION STORAGE. THEN TAKE TO A NEW PAGE THAT SAYS ORDER CONFIRMED AND HAS A BUTTON TO TAKE BACK TO THE HOME PAGE.
import { createContext, useState } from "react";

export const Context = createContext(null);

function GlobalState({children}) {

    const [cartItems, setCartItems] = useState(() => {
        if(typeof window !== "undefined") {
            const storedItems = JSON.parse(localStorage.getItem("cartItems"));
            return storedItems || [];
        } else {
            console.log("window is undefined");
        }
    },[]);

    function handleAddToCart(getCurrentItem) {
        setCartItems(prevCartItems => [...prevCartItems, getCurrentItem]);

        localStorage.setItem("cartItems", JSON.stringify([...cartItems, getCurrentItem]));
    }

    return (
        <Context.Provider value={{cartItems,handleAddToCart}}>
            {children}
        </Context.Provider>
    );
}

export default GlobalState;
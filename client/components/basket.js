//basket.js
//TODO: NEEDS CHANGING TO WORK WITH THE POST REQUEST. WHEN BUTTON CLICKED, TAKE TO NEW PAGE THAT GETS THE SESSION STORAGE OF THE CART ITEMS AND DISPLAYS THEM. 
//TODO: THEN HAVE A BUTTON TO CONFIRM ORDER. THIS WILL THEN POST THE ORDER TO THE DATABASE AND CLEAR THE SESSION STORAGE. THEN TAKE TO A NEW PAGE THAT SAYS ORDER CONFIRMED AND HAS A BUTTON TO TAKE BACK TO THE HOME PAGE.
import { createContext, useState } from "react";
import currencyFormatter from "@/helpers/currencyFormatter";
import loadingStatus from "@/helpers/loadingStatus";
import { useEffect } from "react";
import { useCallback } from "react";
import LoadingIndicator from "./loadingIndicator";
import { useGetBasketPizza, useGetBasketSide, useGetBasketBeverage } from "@/hooks/useGetBasket";

const Basket = () => {
    const {basketPizza, setBasketPizza, loadingStatePizza} = useGetBasketPizza();
    // const {basketSide, setBasketSide, loadingStateSide} = useGetBasketSide();
    // const {basketBeverage, setBasketBeverage, loadingStateBeverage} = useGetBasketBeverage();
    
    // if (basketPizza === undefined && basketSide === undefined && basketBeverage === undefined) {
    //     console.log(basketPizza + " " + basketSide + " " + basketBeverage);
    //     return <div><h2>The basket is empty</h2></div>;
    // }

    return (
        <>
        
        </>
    )
};

export default Basket;
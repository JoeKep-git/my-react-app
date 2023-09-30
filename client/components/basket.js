//basket.js
//TODO: NEEDS CHANGING TO WORK WITH THE POST REQUEST. WHEN BUTTON CLICKED, TAKE TO NEW PAGE THAT GETS THE SESSION STORAGE OF THE CART ITEMS AND DISPLAYS THEM. 
//TODO: THEN HAVE A BUTTON TO CONFIRM ORDER. THIS WILL THEN POST THE ORDER TO THE DATABASE AND CLEAR THE SESSION STORAGE. THEN TAKE TO A NEW PAGE THAT SAYS ORDER CONFIRMED AND HAS A BUTTON TO TAKE BACK TO THE HOME PAGE.
import { createContext, useState } from "react";
import currencyFormatter from "@/helpers/currencyFormatter";
import loadingStatus from "@/helpers/loadingStatus";
import { useEffect } from "react";
import { useCallback } from "react";
import LoadingIndicator from "./loadingIndicator";
import useGetBasketPizza from "@/hooks/useGetBasketPizza";
import useGetBasketSide from "@/hooks/useGetBasketSide";
import useGetBasketBeverage from "@/hooks/useGetBasketBeverage";

const Basket = () => {
    const {basket, setBasket, loadingState} = useGetBasketPizza();
    const {basketSide, setBasketSide, loadingStateSide} = useGetBasketSide();
    const {basketBeverage, setBasketBeverage, loadingStateBeverage} = useGetBasketBeverage();

    if(basket === undefined && basketSide === undefined && basketBeverage === undefined) {
        return <div><h2>No items in basket</h2></div>
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {basket && basket.map((item) => (

                    <div key={item.id} className="col">
                        <div className="card">
                        <img src={item.imageSrc} className="card-img-top" ></img>
                        <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.size}</p>
                        <p className="card-text">{currencyFormatter.format(item.price)}</p>
                        <p className="card-text">{item.toppings.join(', ')}</p>
                        </div>
                        </div>
                    </div>

            ))}
            {basketSide && basketSide.map((item) => (
                <>
                    <div key={item.id}>
                        <p>{item.sideName}</p>
                        <p>{currencyFormatter.format(item.price)}</p>
                        <p>{item.pictureName}</p>
                    </div>
                </>
            ))}
            {basketBeverage && basketBeverage.map((item) => (
                <>
                    <div key={item.id}>
                        <p>{item.drinkName}</p>
                        <p>{currencyFormatter.format(item.price)}</p>
                        <p>{item.litre}</p>
                        <p>{item.pictureName}</p>
                    </div>
                </>
            ))}   
        </div>
    )
};

export default Basket;
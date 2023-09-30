import currencyFormatter from "@/helpers/currencyFormatter";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";
import { useContext } from "react";
import { useState } from "react";
import useToppings from "@/hooks/useToppings";
import useGetCustomise from "@/hooks/useGetCustomise";
//get the toppings from nodejs backend
//use the toppings to populate buttons to add toppings to the pizza or remove

function PizzaRow({ pizza }) {
    const { toppings, setToppings, loadingState } = useToppings();
    const { customise, setCustomise, loadingStateCustomise } = useGetCustomise();
    const { navigate } = useContext(navigationContext);
    console.log(customise);
    console.log(pizza);

    const handleToppingClick = (toppingName) => {
        setCustomise(prevState => {
            const updatedCustomise = prevState.map(customiseItem => {
                if (customiseItem.toppings.includes(toppingName)) {
                    const updatedToppings = customiseItem.toppings.filter(topping => topping !== toppingName);
                    return { ...customiseItem, toppings: updatedToppings };
                } else {
                    return { ...customiseItem, toppings: [...customiseItem.toppings, toppingName] };
                }
            });
            return updatedCustomise;
        });
    };

    return (
        <>
            <div className="card">
                <div className="card-body">
                {customise.map((customise) => (
                    <div className="card-body">
                            <img src={customise.imageSrc || "http://localhost:8000/api/images/defaultPizzaPhoto.jpg"} className="card-img-top" alt={customise.name}/>
                            <h5 className="card-title">{customise.name}</h5>
                            <p className="card-text">Toppings: {customise.toppings.join(', ')}</p>
                            <p className="card-text">Size: {customise.size}</p>
                            <p className="card-text">Price: {currencyFormatter.format(customise.price)}</p>
                        
                        <div className="card-text">
                        {toppings.map((topping) => (
                            <>
                            <button
                                    className={`btn ${customise.toppings.includes(topping.ToppingName) ? 'btn-success' : 'btn-primary'}`}
                                    onClick={() => handleToppingClick(topping.ToppingName)}
                                >
                                {topping.ToppingName}
                                {topping.IsVegan ? "| Vegan ✅ | " : null}
                                {topping.IsGlutenFree ? "Gluten-free ✅" : null}
                                </button><br/><br/>
                            </>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}
  
export default PizzaRow;
  
// export {PizzaRowMem}; Performance gain is insignificant due to how small this is
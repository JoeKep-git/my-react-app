import currencyFormatter from "@/helpers/currencyFormatter";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";
import { useContext } from "react";
import { useState } from "react";
import useToppings from "@/hooks/useToppings";
import useGetCustomise from "@/hooks/useGetCustomise";
import postPizza from "@/hooks/usePostPizza";
import { useRef } from "react";
import { useEffect } from "react";

//get the toppings from nodejs backend
//use the toppings to populate buttons to add toppings to the pizza or remove

function PizzaRow({ pizza }) {
    const { toppings, setToppings, loadingState } = useToppings();
    const { customise, setCustomise, loadingStateCustomise } = useGetCustomise();
    const { navigate } = useContext(navigationContext);
    const addToCartButtonRef = useRef(null);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [selectedSize, setSelectedSize] = useState('small'); // Default value is 'small'
    const [selectedCrust, setSelectedCrust] = useState('Thin Italian'); // Default value is 'Thin Italian'

    //for customising pizza 50/50
    const [toppingForHalf1, setToppingForHalf1] = useState(null);
    const [toppingForHalf2, setToppingForHalf2] = useState(null);

    //set topping for half 1
    const handleToppingSelectHalf1 = (event) => {
        setToppingForHalf1(event.target.value);
    };

    //set topping for half 2
    const handleToppingSelectHalf2 = (event) => {
        setToppingForHalf2(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        console.log(event.target.value);
    };

    const handleCrustChange = (event) => {
        setSelectedCrust(event.target.value);
        console.log(event.target.value);
    };

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

    useEffect(() => {
        handleAddToCart();
    }, [selectedToppings, selectedPizza]);

    const handleAddToCart = () => {
        if (selectedPizza) {
        // Gather selected toppings with class name "btn-success"
        const selectedToppings = document.querySelectorAll(".btn-success");
        const selectedToppingsArray = Array.from(selectedToppings).map(
            (topping) => topping.innerText.trim()
        );

        // Gather pizza name
        const pizzaName = selectedPizza.name;
        let toppingsArray = [];
        if (pizzaName === "50/50 Pizza") {
            if (toppingForHalf1 && toppingForHalf2) {
                toppingsArray = [toppingForHalf1, toppingForHalf2];
                console.log(toppingsArray);
            } else {
                // Handle case where toppings are not selected for both halves
                console.error("Please select toppings for both halves.");
                return;
            }
        } else {
            // Handle other pizzas
            toppingsArray = selectedToppingsArray;
        }
        // Combine them into a variable
        const cartItem = {
            name: pizzaName,
            toppings: toppingsArray,
            price: selectedPizza.price,
            imageSrc: selectedPizza.imageSrc,
        };

        // Print the result
        console.log("Added to Cart:", cartItem);
            postPizza(cartItem, selectedSize, selectedCrust);
        }
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
                            {customise.name !== "50/50 Pizza" && (
                                <>
                                    <button
                                        className={`btn ${customise.toppings.includes(topping.ToppingName) ? 'btn-success' : 'btn-primary'}`}
                                        onClick={() => {handleToppingClick(topping.ToppingName)}}
                                    >
                                    {topping.ToppingName}
                                    {topping.IsVegan ? "| Vegan ✅ | " : null}
                                    {topping.IsGlutenFree ? "Gluten-free ✅" : null}
                                    </button><br/><br/>
                                </>
                            )}
                            
                            </>
                        ))}

                        {customise.name === "50/50 Pizza" && (
                                <>
                                    <p className="card-text">Toppings for Half 1:</p>
                                    <select className="form-select" aria-label="selecting topping" onChange={handleToppingSelectHalf1} value={toppingForHalf1}>
                                        <option value="">Select Topping</option>
                                        {toppings.map((topping) => (
                                            <option key={topping.ToppingName} value={topping.ToppingName}>
                                                {topping.ToppingName}
                                            </option>
                                        ))}
                                    </select>
                                    <br/>
                                    <p className="card-text">Toppings for Half 2:</p>
                                    <select className="form-select" aria-label="selecting topping" onChange={handleToppingSelectHalf2} value={toppingForHalf2}>
                                        <option value="">Select Topping</option>
                                        {toppings.map((topping) => (
                                            <option key={topping.ToppingName} value={topping.ToppingName}>
                                                {topping.ToppingName}
                                            </option>
                                        ))}
                                    </select>
                                    <br/>
                                </>
                            )}


                        </div>
                        <p className="card-text">Size:</p>
                        <select className="form-select" aria-label="selecting size" onChange={handleSizeChange} value={selectedSize}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select><br/>
                        <p className="card-text">Crust:</p>
                        <select className="form-select" aria-label="selecting size" onChange={handleCrustChange} value={selectedCrust}>
                            <option value="Thin Italian">Thin Italian</option>
                            <option value="Stone Crust">Stone Crust</option>
                            <option value="Cheese Stuffed Crust">Cheese Stuffed Crust</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Gluten Free">Gluten Free</option>
                        </select>
                        <br/><br/>
                        <button
                            ref={addToCartButtonRef}
                            className="btn btn-primary"
                            onClick={() => {
                            setSelectedToppings(
                                customise.toppings.filter((topping) =>
                                selectedToppings.includes(topping)
                                )
                            );
                            setSelectedPizza(customise);
                            handleAddToCart(); // Call the function when the button is clicked
                            }}
                        >
                        Add to Cart
                        </button>
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
}
  
export default PizzaRow;
  
// export {PizzaRowMem}; Performance gain is insignificant due to how small this is
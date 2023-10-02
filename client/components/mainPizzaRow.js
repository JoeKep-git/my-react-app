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

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
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

        // Combine them into a variable
        const cartItem = {
            name: pizzaName,
            toppings: selectedToppingsArray,
            price: selectedPizza.price,
            imageSrc: selectedPizza.imageSrc,
        };

        // Print the result
        console.log("Added to Cart:", cartItem);
            postPizza(cartItem, selectedSize);
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
                            <button
                                    className={`btn ${customise.toppings.includes(topping.ToppingName) ? 'btn-success' : 'btn-primary'}`}
                                    onClick={() => {handleToppingClick(topping.ToppingName)}}
                                >
                                {topping.ToppingName}
                                {topping.IsVegan ? "| Vegan ✅ | " : null}
                                {topping.IsGlutenFree ? "Gluten-free ✅" : null}
                                </button><br/><br/>
                            </>
                        ))}
                        </div>
                        <select className="form-select" aria-label="selecting size" onChange={handleSizeChange} value={selectedSize}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select><br/><br/>
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
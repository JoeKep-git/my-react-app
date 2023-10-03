import PizzaRow from "./mainPizzaRow";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";
import usePizzas from "@/hooks/usePizzas";
import currencyFormatter from "@/helpers/currencyFormatter";
import postPizza from "@/hooks/usePostPizza";
import { useState } from "react";
import { navigationContext } from "./app";
import { useContext } from "react";
import navValues from "@/helpers/navValues";
import postCusomise from "@/hooks/usePostCustomise";

const PizzaList = () => {
    const {pizzas, setPizzas, loadingState} = usePizzas();
    const [selectedSize, setSelectedSize] = useState('small'); // Default value is 'small'
    const [selectedCrust, setSelectedCrust] = useState('Thin Italian'); // Default value is 'Thin Italian'

    //conditional rendering
    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    const handleAddToCart = async (pizza, size, crust) => {
        const response = await postPizza(pizza, size, crust);
    };

    const handleCrustChange = (event) => {
        setSelectedCrust(event.target.value);
        console.log(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
        console.log(event.target.value);
    };

    const {navigate} = useContext(navigationContext);
    const handlePizzaClick = async (customise) => {
        const response = await postCusomise(customise);
        navigate(navValues.pizzaCustomise, customise);
    };

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col">
                        <div className="card">
                            {console.log(pizza.imageSrc)}
                            <img src={pizza.imageSrc || "http://localhost:8000/api/images/defaultPizzaPhoto.jpg"} className="card-img-top" alt={pizza.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">Toppings: {pizza.toppings.join(', ')}</p>
                                <p className="card-text">Price: {currencyFormatter.format(pizza.price)}</p>
                                <p className="card-text">Size:</p>
                                <select className="form-select" aria-label="selecting size" onChange={handleSizeChange} value={selectedSize}>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                    <option value="pizzanormous">Pizzanormous</option>
                                </select>
                                <br/>
                                <p className="card-text">Crust:</p>
                                <select className="form-select" aria-label="selecting size" onChange={handleCrustChange} value={selectedCrust}>
                                    <option value="Thin Italian">Thin Italian</option>
                                    <option value="Stone Crust">Stone Crust</option>
                                    <option value="Cheese Stuffed Crust">Cheese Stuffed Crust</option>
                                    <option value="Vegan">Vegan</option>
                                    <option value="Gluten Free">Gluten Free</option>
                                </select>
                                <br/>
                                <button className="btn btn-primary" onClick={() => handleAddToCart(pizza, selectedSize, selectedCrust)}>Add to Cart</button> 
                                <button className="btn btn-primary" onClick={() => handlePizzaClick(pizza)}>Customise</button>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </>
    );
};

export default PizzaList;
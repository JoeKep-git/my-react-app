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

const PizzaList = () => {
    const {pizzas, setPizzas, loadingState} = usePizzas();
    const [selectedPizza, setSelectedPizza] = useState(null);

    //conditional rendering
    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    const handleAddToCart = async (pizza) => {
        const response = await postPizza(pizza);
    };

    const {navigate} = useContext(navigationContext);
    const handlePizzaClick = (pizza) => {
        console.log(pizza);
        setSelectedPizza(pizza);
        navigate(navValues.pizzaCustomise, pizza);
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
                                <p className="card-text">Size: {pizza.size}</p>
                                <p className="card-text">Price: {currencyFormatter.format(pizza.price)}</p>
                                <select className="form-select" aria-label="selecting size">
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                                <br/>
                                <button className="btn btn-primary" onClick={() => handleAddToCart(pizza)}>Add to Cart</button> 
                                <button className="btn btn-primary" onClick={() => handlePizzaClick(pizza)}>Customise</button>
                            </div>
                        </div>
                    </div> 
                ))}
                        {selectedPizza && <PizzaRow pizza={selectedPizza}/>}

            </div>
        </>
    );
};

export default PizzaList;
import PizzaRow from "./mainPizzaRow";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";
import usePizzas from "@/hooks/usePizzas";

const PizzaList = () => {
    const {pizzas, setPizzas, loadingState} = usePizzas();

    //conditional rendering
    if(loadingState !== loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col">
                        <div className="card">
                            <img src={pizza.imageSrc} className="card-img-top" alt={pizza.name} />
                            <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">Toppings: {pizza.toppings.join(', ')}</p>
                                <p className="card-text">Size: {pizza.size}</p>
                                <p className="card-text">Price: ${pizza.price}</p>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </>
    );
};

export default PizzaList;
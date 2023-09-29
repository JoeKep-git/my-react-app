import navValues from "@/helpers/navValues";
import SidesList from "./sides";
import PizzaList from "./mainPizzaList";
import BeveragesList from "./beverages";
import PizzaRow from "./mainPizzaRow";
import Basket from "./basket";

const ComponentPicker = ({currentNavLocation, selectedPizza}) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <PizzaList />;
        case navValues.pizza:
            return <PizzaList />;
        case navValues.sides:
            return <SidesList />;
        case navValues.drinks:
            return <BeveragesList />;
        case navValues.pizzaCustomise:
            return <PizzaRow pizza={selectedPizza}/>;
        case navValues.cart:
            return <Basket />;
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found
                </h3>
            );
    }
};

export default ComponentPicker;
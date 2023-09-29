import navValues from "@/helpers/navValues";
import SidesList from "./sides";
import PizzaList from "./mainPizzaList";
import BeveragesList from "./beverages";
import PizzaRow from "./mainPizzaRow";

const ComponentPicker = ({currentNavLocation}) => {
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
            return <PizzaRow />;
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found
                </h3>
            );
    }
};

export default ComponentPicker;
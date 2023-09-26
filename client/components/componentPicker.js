import navValues from "@/helpers/navValues";
import SidesList from "./sides";
import PizzaList from "./mainPizzaList";
import BeveragesList from "./beverages";

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
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found
                </h3>
            );
    }
};

export default ComponentPicker;
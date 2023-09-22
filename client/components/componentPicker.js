import navValues from "@/helpers/navValues";
import Pizza from "./pizza";
import PizzaList from "./mainPizzaList";

const ComponentPicker = ({currentNavLocation}) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <PizzaList />;
        case navValues.pizza:
            return <Pizza />;
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found
                </h3>
            );
    }
};

export default ComponentPicker;
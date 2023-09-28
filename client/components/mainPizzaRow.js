import currencyFormatter from "@/helpers/currencyFormatter";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const PizzaRow = ({pizza}) => {
    const {navigate} = useContext(navigationContext);
    return (
        <tr onClick={() => navigate(navValues.pizzaCustomise, pizza)}>
            <td>{pizza.name}</td>
            <td>{pizza.toppings.join(", ")}</td>
            <td>{pizza.size}</td>
            <td>{currencyFormatter.format(pizza.price)}</td>
        </tr>
    )
};

// const PizzaRowMem = React.memo(PizzaRow);

export default PizzaRow;
// export {PizzaRowMem}; Performance gain is insignificant due to how small this is
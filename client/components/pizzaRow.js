import currencyFormatter from "@/helpers/currencyFormatter";

const PizzaRow = ({pizza}) => {
    return (
        <tr>
            <td>{pizza.name}</td>
            <td>{pizza.toppings.join(", ")}</td>
            <td>{pizza.size}</td>
            <td>{currencyFormatter.format(pizza.price)}</td>
        </tr>
    )
};

export default PizzaRow;
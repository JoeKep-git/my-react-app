import currencyFormatter from "@/helpers/currencyFormatter";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";
import { useContext } from "react";

const PizzaRow = ({pizza}) => {
    const {navigate} = useContext(navigationContext);
    return (
        <>
            <button className="btn btn-primary" onClick={() => navigate(navValues.pizza)}>Back</button>
            <tr>
                <td>{pizza}</td>
                <td>{pizza}</td>
                <td>{pizza}</td>
                <td>{}</td>
            </tr>
        </>
    )
};

// const PizzaRowMem = React.memo(PizzaRow);

export default PizzaRow;
// export {PizzaRowMem}; Performance gain is insignificant due to how small this is
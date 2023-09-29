import currencyFormatter from "@/helpers/currencyFormatter";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";
import { useContext } from "react";
import { useState } from "react";
import useToppings from "@/hooks/useToppings";

//get the toppings from nodejs backend
//use the toppings to populate buttons to add toppings to the pizza or remove

function PizzaRow({ pizza }) {
    const { toppings, setToppings, loadingState } = useToppings();

    const { navigate } = useContext(navigationContext);
    console.log(pizza);
    return (
        <>
            <>
                {toppings.map((topping) => (
                    <>
                    <button className="btn btn-primary">
                    {topping.ToppingName}
                    {topping.IsVegan ? "| Vegan ✅ | " : null}
                    {topping.IsGlutenFree ? "Gluten-free ✅" : null}
                    </button><br/><br/>
                    </>
                ))}
            </>
        </>
    );
}
  
  export default PizzaRow;
  
// export {PizzaRowMem}; Performance gain is insignificant due to how small this is
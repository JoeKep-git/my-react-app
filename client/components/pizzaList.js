// import styles from "./pizzaList.module.css"
import { useState } from "react";
import PizzaRow from "./pizzaRow";

//temporary array of pizzas
const pizzasArray = [
    {
        id: 1,
        name: "Cheese Pizza",
        toppings: ["cheese"],
        size: "small",
        price: 9.99
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        toppings: ["cheese", "pepperoni"],
        size: "small",
        price: 10.99
    },
    {
        id: 3,
        name: "Supreme Pizza",
        toppings: ["cheese", "pepperoni", "sausage", "onions", "peppers"],
        size: "small",
        price: 12.99
    },
];

const PizzaList = () => {
    //function is expected to have the set prefix
    //call hook at the top level
    //useState cannot be skipped
    //useState is called within the components functions
    //These are the rules for hooks
    const [pizzas, setPizzas] = useState(pizzasArray);

    const [counter, setCounter] = useState(0);
    //counter here is a primitive type not a reference type
    //With primitive types, React will compare the previous value to the new value. Only if there is a difference,
    const buttonClicked = () => setCounter(current => counter + 1);
    //Current here is the equivalent to the value of counter most of the time. 
    //But when multiple calls to the set function are done, React batches the calls for efficiency, only updating the state value when the batch completes

    const addPizza = () => {
        //only use setPizzas not pizzas to update the state
        setPizzas([
            ...pizzas,
            {
                id: 4,
                name: "Meat Lovers Pizza",
                toppings: ["cheese", "pepperoni", "sausage", "bacon"],
                size: "small",
                price: 12.99
            }
        ]);
    };
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Pizza List
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Pizza</th>
                        <th>Toppings</th>
                        <th>Size</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas.map((p) => (
                    //not directly passing the pizza array, but each property of the pizza state

                    // <PizzaRow key={p.id} name={p.name} toppings={p.toppings} size={p.size} price={p.price}/>
                    //in the future we add new properties to pizza that the PizzaRow doesn't need. 
                    //Then each property will be passed on as an individual prop anyway, and that can negatively impact performance. 
                    //Unless PizzaRow is used outside of the HouseList, we can just do what is commented above
                    // <PizzaRow key={p.id} {...p}/>
                    <PizzaRow key={p.id} pizza={p}/>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addPizza}>
                Add
            </button>
        </>
    );
};

export default PizzaList;
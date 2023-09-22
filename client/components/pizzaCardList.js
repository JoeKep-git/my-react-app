import {useState} from 'react';

//temp array of pizzas
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

const CardPizzaList = () => {
    const [pizzas, setPizzas] = useState(pizzasArray);
    const addPizza = () => {
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
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Pizza List</h5>
                    <p className="card-text">This is a list of pizzas</p>
                    <button className="btn btn-primary" onClick={addPizza}>Add Pizza</button>
                </div>
            </div>
        </>
    );
};

export default CardPizzaList;
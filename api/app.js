const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}; 

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.send('Home Route');
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);

const pizzas = [
    {
        id: 1,
        name: "Pizza 1",
        toppings: ["cheese", "pepperoni"],
        size: "small",
        price: 10.99,
    },
    {
        id: 2,
        name: "Pizza 2",
        toppings: ["cheese", "pepperoni", "sausage"],
        size: "medium",
        price: 12.99,
    },
    {
        id: 3,
        name: "Pizza 3",
        toppings: ["cheese", "pepperoni", "sausage", "mushrooms"],
        size: "large",
        price: 14.99,
    },
    {
        id: 4,
        name: "Pizza 4",
        toppings: ["cheese", "pepperoni", "sausage", "mushrooms", "onions"],
        size: "small",
        price: 10.99,
    },
];

app.get("/api/pizzas", (req, res) => {
    res.send(pizzas);
});

module.exports = app;
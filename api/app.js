//packages
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const defaultPhoto = './images/defaultPizzaPhoto.jpg';
const defaultSidePhoto = './images/sides/garlicBread.jpg';
const fs = require('fs');
const sql = require('mssql');
const env = require('dotenv').config();

// Define the directory where side images are stored
const sidesImageDir = './images/sides/';

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    enableArithAbort: true,
    encrypt: true
  }
};

const getSides = async () => {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query("SELECT * FROM sides");
    console.dir(result);
    return result;
  }
  catch (err) {
    console.log(err);
  }
}

getSides();
console.log(getSides());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}; 

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Home Route');
});

app.get('/api', (req, res) => {
  res.send('Home Route');
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);

/******************Start of Pizzas***************************** */

const pizzas = [
  {
      id: 1,
      name: "Pizza 1",
      toppings: ["cheese", "pepperoni"],
      size: "small",
      price: 10.99,
      imageSrc: '/images/defaultPizzaPhoto.jpg',
  },
  {
      id: 2,
      name: "Pizza 2",
      toppings: ["cheese", "pepperoni", "sausage"],
      size: "medium",
      price: 12.99,
      imageSrc: '/images/pizzaTest.jpeg',
  },
  {
      id: 3,
      name: "Pizza 3",
      toppings: ["cheese", "pepperoni", "sausage", "mushrooms"],
      size: "large",
      price: 14.99,
      imageSrc: '/images/defaultPizzaPhoto.jpg',
  },
  {
      id: 4,
      name: "Pizza 4",
      toppings: ["cheese", "pepperoni", "sausage", "mushrooms", "onions"],
      size: "small",
      price: 10.99,
      imageSrc: '/images/defaultPizzaPhoto.jpg',
  },
];

app.get("/api/pizzas", (req, res) => {
  res.send(pizzas);
});

/******************End of Pizzas***************************** */

/******************Start of Sides***************************** */
//array of sides
const sides = [
  {
    id: 1,
    name: "Garlic Bread",
    price: 5.99,
    imageSrc: '/images/sides/garlicBread.jpg',
  },
  {
    id: 2,
    name: "Chicken Wings",
    price: 7.99,
    imageSrc: '/images/sides/chickenWings.jpg',
  }
]

app.get("/api/sides", (req, res) => {
    res.send(sides);
});

/******************End of Sides***************************** */

/******************Start of Beverages***************************** */
//array of sides
const beverages = [
  {
    id: 1,
    name: "Pepsi",
    price: 1.99,
    imageSrc: '/images/beverages/pepsi.png',
  },
  {
    id: 2,
    name: "Pepsi Max",
    price: 2.99,
    imageSrc: '/images/beverages/pepsi.png',
  }
]

app.get("/api/beverages", (req, res) => {
    res.send(beverages);
});

/******************End of Beverages***************************** */

module.exports = app;
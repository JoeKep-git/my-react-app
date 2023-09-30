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
const session = require('express-session');
const bodyParser = require('body-parser');

// Define the directory where side images are stored
const sidesImageDir = './images/sides/';

//sql configuration using .env file
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    enableArithAbort: true,
    encrypt: false,
    trustedServerCertificate: true,
    trustedConnection: true,
  }
};

const allowedOrigins = ['http://localhost:3000']; //Nextjs Reactjs Origin

const corsOptions = {
  origin: function(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

//middleware
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Home Route');
});

app.get('/api', (req, res) => {
  res.send('Home Route');
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);

//making a variable that queries the database for drinks
const getDrinks = async () => {
  try {
    //connecting to the database
    await sql.connect(sqlConfig);
    //querying the database
    const query = await sql.query("SELECT * FROM drinks");
    return query.recordset;
  }
  catch (err) {
    console.log(err);
  } finally {
    //closing connection to database
    await sql.close();
  }
}
//get method that sends the drinks to the front end
app.get('/api/beverages', async (req, res) => {
  try {
    //getting the drinks from the database and sending it as JSON
    const drinks = await getDrinks();
    res.send(JSON.stringify(drinks));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

//making a variable that queries the database for sides
const getSides = async () => {
  try {
    //connecting to the database
    await sql.connect(sqlConfig);
    //querying the database
    const query = await sql.query("SELECT * FROM sides");
    return query.recordset;
  } catch (err) {
    console.log(err);
  } finally {
    //closing connection to database
    await sql.close();
  }
};

//get method that sends the sides to the front end
app.get("/api/sides", async (req, res) => {
  try {
    const sides = await getSides();
    res.send(JSON.stringify(sides));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

//post methods that will save the order to the session
app.post("/api/pizzas", async (req, res) => {
  try {
    console.log("This is the api/pizzas post request")
    console.log(req.body);
    const item = req.body;
    req.session.cartPizza = req.session.cartPizza || [];
    req.session.cartPizza.push(item);
    // console.log(req.session.cart[0].toppings.push("cheese"))
    // console.log(req.session.cart[0]);
    res.send("Pizza added to cart");

  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
//post method that will save the order to the session
app.post("/api/sides", async (req, res) => {
  try {
    console.log("This is the api/sides post request")
    console.log(req.body);
    const item = req.body;
    req.session.cartSide = req.session.cartSide || [];
    req.session.cartSide.push(item);
    // console.log(req.session.cart[0].toppings.push("cheese"))
    // console.log(req.session.cart[0]);
    res.send("Side added to cart");

  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

//post method that will save the order to the session
app.post("/api/beverage", async (req, res) => {
  try {
    console.log("This is the api/sides post request")
    console.log(req.body);
    const item = req.body;
    req.session.cartBeverage = req.session.cartBeverage || [];
    req.session.cartBeverage.push(item);
    // console.log(req.session.cart[0].toppings.push("cheese"))
    // console.log(req.session.cart[0]);
    res.send("Side added to cart");

  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

//post method that will save the pizza order to the session when the user clicks customise
app.post("/api/customise", async (req, res) => { 
  try {
    console.log("This is the api/customise post request")
    console.log(req.body);
    const item = req.body;
    req.session.customise = []; //empty the customise array so that it doesn't keep adding to it
    req.session.customise.push(item);
    // console.log(req.session.cart[0].toppings.push("cheese"))
    // console.log(req.session.cart[0]);
    res.send("Pizza added to customise");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

//get request to get the information to customise the pizza
app.get("/api/customise", async (req, res) => {
  try {
    console.log("This is the api/customise get request")
    console.log(req.session.customise);
    res.send(req.session.customise);
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/cartPizza", async (req, res) => {
  try {
    console.log("This is the api/cart pizza get request")
    console.log(req.session.cartPizza);
    res.send(req.session.cartPizza);
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/api/cartSide", async (req, res) => {
  try {
    console.log("This is the api/cart get request")
    console.log(req.session.cartSide);
    res.send(req.session.cartSide);
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/api/cartBeverage", async (req, res) => {
  try {
    console.log("This is the api/cart get request")
    console.log(req.session.cartBeverage);
    res.send(req.session.cartBeverage);
  }
  catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/pizzaQuery", async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const query = await sql.query("SELECT * FROM PizzaDetails WHERE PizzaName = $1", req.body.pizzaName);
    for (let i = 0; i < query.recordset.length; i++) {
      console.log(query.recordset[i].ToppingName);
    }
    res.send(JSON.stringify(query.recordset));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  } finally {
    await sql.close();
  }
});

app.get("/api/pizza", async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const query = await sql.query("SELECT * FROM Pizza");
    res.send(JSON.stringify(query.recordset));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  } finally {
    await sql.close();
  }
});

app.get("/api/toppings", async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const query = await sql.query("SELECT * FROM Toppings");
    res.send(JSON.stringify(query.recordset));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  } finally {
    await sql.close();
  }
});
/******************Start of Pizzas***************************** */

const pizzas = [
  {
      id: 1,
      name: "Pizza 1",
      toppings: ["Mozzarella Cheese", "Pepperoni"],
      size: "small",
      price: 10.99,
      imageSrc: '/images/defaultPizzaPhoto.jpg',
  },
  {
      id: 2,
      name: "Pizza 2",
      toppings: ["Mozzarella Cheese", "pepperoni", "sausage"],
      size: "medium",
      price: 12.99,
      imageSrc: '/images/pizzaTest.jpeg',
  },
  {
      id: 3,
      name: "Pizza 3",
      toppings: ["Mozzarella Cheese", "pepperoni", "sausage", "mushrooms"],
      size: "large",
      price: 14.99,
      imageSrc: '/images/defaultPizzaPhoto.jpg',
  },
  {
      id: 4,
      name: "Pizza 4",
      toppings: ["Mozzarella Cheese", "pepperoni", "sausage", "mushrooms", "onions"],
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

/******************End of Beverages***************************** */

module.exports = app;
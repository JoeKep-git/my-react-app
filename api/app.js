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

const getPizza = async () => {
  try {
    await sql.connect(sqlConfig);
    const query = await sql.query("SELECT * FROM PizzaDetails WHERE PizzaName = 'Vegan Supreme'");
    console.log(query.recordset);
    return query.recordset;
  } catch (err) {
    console.log(err);
  } finally {
    await sql.close();
  }
}

getPizza();
/******************Start of Pizzas***************************** */

const pizzas = [
  {
      "id": 1,
      "name": "Green Garden Delight",
      "toppings": ["Vegan Cheese", "Bell Peppers", "Onions", "Mushrooms", "Spinach"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/GreenGardenDelight.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 2,
      "name": "Mediterranean Sunset",
      "toppings": ["Vegan Cheese", "Sun-dried Tomatoes", "Kalamata Olives", "Cilantro", "Red Onions"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/MedPizza.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 3,
      "name": "Savory Veggie Medley",
      "toppings": ["Vegan Cheese", "Bell Peppers", "Onions", "Olives", "Mushrooms"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/SausageandOnionSymphony.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 4,
      "name": "Sun-Kissed Spinach Sensation",
      "toppings": ["Vegan Cheese", "Spinach", "Sun-dried Tomatoes", "Kalamata Olives", "Red Onions"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/Sun-KissedSpinachSensation.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 5,
      "name": "Colorful Vegan Fiesta",
      "toppings": ["Vegan Cheese", "Bell Peppers", "Onions", "Mushrooms", "Red Onions"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/ColorfulVeganFiesta.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 6,
      "name": "Classic Ham and Cheese",
      "toppings": ["Ham", "Mozzarella Cheese", "Parmesan Cheese", "Cheddar Cheese"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/ClassicHamandCheese.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 7,
      "name": "Bacon Lover's Dream",
      "toppings": ["Bacon", "Mozzarella Cheese", "Parmesan Cheese", "Cheddar Cheese"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/BaconLoversDream.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 8,
      "name": "Sausage Extravaganza",
      "toppings": ["Sausage", "Mozzarella Cheese", "Parmesan Cheese", "Cheddar Cheese"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/SausageExtravaganza.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 9,
      "name": "Pepperoni Paradise",
      "toppings": ["Pepperoni", "Mozzarella Cheese", "Parmesan Cheese", "Cheddar Cheese"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/PepperoniParadise.jpeg",
      "crust": "Thin Italian"
  },
  {
      "id": 10,
      "name": "Savory Meat Feast",
      "toppings": ["Pepperoni", "Sausage", "Mozzarella Cheese", "Parmesan Cheese"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/SavoryMeatFeast.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 11,
      "name": "Ham and Mushroom Magic",
      "toppings": ["Ham", "Mozzarella Cheese", "Parmesan Cheese", "Mushrooms"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/HamandMushroomMagic.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 12,
      "name": "Bacon and Spinach Supreme",
      "toppings": ["Bacon", "Mozzarella Cheese", "Parmesan Cheese", "Spinach"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/BaconandSpinachSupreme.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 13,
      "name": "Four Cheese Delight",
      "toppings": ["Mozzarella Cheese", "Parmesan Cheese", "Cheddar Cheese", "Ricotta Cheese"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/FourCheeseDelight.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 14,
      "name": "Pepperoni Ricotta Bliss",
      "toppings": ["Pepperoni", "Mozzarella Cheese", "Parmesan Cheese", "Ricotta Cheese"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/PepperoniRicottaBliss.jpg",
      "crust": "Thin Italian"
  },
  {
      "id": 15,
      "name": "Sausage and Onion Symphony",
      "toppings": ["Sausage", "Mozzarella Cheese", "Parmesan Cheese", "Red Onions"],
      "size": "small",
      "price": 10.99,
      "imageSrc": "/images/SausageandOnionSymphony.jpg",
      "crust": "Thin Italian"
  }
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
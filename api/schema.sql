CREATE TABLE sides(
	sideID INT NOT NULL PRIMARY KEY IDENTITY,
	sideName VARCHAR(100) NOT NULL,
	price DECIMAL NOT NULL,
	sideDescription VARCHAR(255)
);

CREATE TABLE drinks(
	drinkID INT NOT NULL PRIMARY KEY IDENTITY,
	drinkName VARCHAR(100) NOT NULL,
	litre DECIMAL NOT NULL,
	price DECIMAL NOT NULL,
	drinkDescription VARCHAR(255)
);

CREATE TABLE pizzaSize(
	pizzaSizeID INT NOT NULL PRIMARY KEY IDENTITY,
	pizzaSize VARCHAR(20) NOT NULL
);

CREATE TABLE pizzaCrust(
	pizzaCrustID INT NOT NULL PRIMARY KEY IDENTITY,
	pizzaCrust VARCHAR(40) NOT NULL
);

CREATE TABLE pizzaBase(
	pizzaBaseID INT NOT NULL PRIMARY KEY IDENTITY,
	baseName VARCHAR(20) NOT NULL
);

CREATE TABLE pizza(
	pizzaID INT NOT NULL PRIMARY KEY IDENTITY,
	pizzaName VARCHAR(50) NOT NULL,
	size INT NOT NULL FOREIGN KEY REFERENCES pizzaSize(pizzasizeid),
	crust INT NOT NULL FOREIGN KEY REFERENCES pizzaCrust(pizzacrustid),
	base INT NOT NULL FOREIGN KEY REFERENCES pizzaBase(pizzabaseid),
	recipe INT NOT NULL FOREIGN KEY REFERENCES pizzaRecipe(pizzarecipeid)
);

CREATE TABLE pizzaToppings(
	toppingsID INT NOT NULL PRIMARY KEY IDENTITY,
	toppingName VARCHAR(100) NOT NULL,
	toppingVegan BIT NOT NULL,
	toppingGlutenFree BIT NOT NULL
);

CREATE TABLE pizzaRecipe(
	pizzaRecipeID INT NOT NULL PRIMARY KEY IDENTITY,
	toppings1 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings2 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings3 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings4 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings5 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings6 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings7 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings8 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings9 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid),
	toppings10 INT FOREIGN KEY REFERENCES pizzaToppings(toppingsid)
);
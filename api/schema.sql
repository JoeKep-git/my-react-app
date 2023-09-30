CREATE TABLE sides(
	sideID INT NOT NULL PRIMARY KEY IDENTITY,
	sideName VARCHAR(100) NOT NULL,
	price DECIMAL(18,2) NOT NULL,
	sideDescription VARCHAR(255),
	pictureName VARCHAR(255) NOT NULL
);

CREATE TABLE drinks(
	drinkID INT NOT NULL PRIMARY KEY IDENTITY,
	drinkName VARCHAR(100) NOT NULL,
	litre DECIMAL(4,2) NOT NULL,
	price DECIMAL(18,2) NOT NULL,
	drinkDescription VARCHAR(255),
	pictureName VARCHAR(255) NOT NULL
);

CREATE TABLE Toppings (
    ToppingID INT PRIMARY KEY IDENTITY,
    ToppingName VARCHAR(255) NOT NULL,
    IsVegan BIT,
    IsGlutenFree BIT
);

CREATE TABLE Crusts (
    CrustID INT PRIMARY KEY IDENTITY,
    CrustType VARCHAR(50) NOT NULL,
    IsVegan BIT NOT NULL,
    IsGlutenFree BIT NOT NULL
);

CREATE TABLE PizzaHalves (
    HalfID INT PRIMARY KEY IDENTITY,
    HalfName VARCHAR(255) NOT NULL
);

CREATE TABLE Pizza (
    PizzaID INT PRIMARY KEY IDENTITY,
    PizzaName VARCHAR(255) NOT NULL,
    PizzaDescription TEXT,
    Price DECIMAL(10,2) NOT NULL,
	IsHalfPizza BIT,
	HalfID INT,
	CrustID INT,
	FOREIGN KEY (HalfID) REFERENCES PizzaHalves(HalfID),
	FOREIGN KEY (CrustID) REFERENCES Crusts(CrustID)
);

CREATE TABLE PizzaHalfToppings (
    HalfToppingID INT PRIMARY KEY IDENTITY,
    HalfID INT NOT NULL,
    ToppingID INT NOT NULL,
    FOREIGN KEY (HalfID) REFERENCES PizzaHalves(HalfID),
    FOREIGN KEY (ToppingID) REFERENCES Toppings(ToppingID)
);

CREATE TABLE PizzaToppings (
    PizzaToppingID INT PRIMARY KEY IDENTITY,
    PizzaID INT NOT NULL,
    ToppingID INT NOT NULL,
    FOREIGN KEY (PizzaID) REFERENCES Pizza(PizzaID),
    FOREIGN KEY (ToppingID) REFERENCES Toppings(ToppingID)
);

SELECT * FROM Crusts;
SELECT * FROM Drinks;
SELECT * FROM Pizza;
SELECT * FROM PizzaHalfToppings;
SELECT * FROM PizzaHalves;
SELECT * FROM PizzaToppings;
SELECT * FROM Sides;
SELECT * FROM Size;
SELECT * FROM Toppings;


CREATE VIEW PizzaDetails AS
SELECT 
    p.PizzaName,
    c.CrustType,
    c.IsVegan AS CrustIsVegan,
    c.IsGlutenFree AS CrustIsGlutenFree,
    t.ToppingName,
    t.IsVegan AS ToppingIsVegan,
    t.IsGlutenFree AS ToppingIsGlutenFree,
    p.Price
FROM 
    Pizza p
JOIN 
    Crusts c ON p.CrustID = c.CrustID
LEFT JOIN 
    PizzaToppings pt ON p.PizzaID = pt.PizzaID
JOIN 
    Toppings t ON pt.ToppingID = t.ToppingID;



SELECT * FROM PIZZADETAILS
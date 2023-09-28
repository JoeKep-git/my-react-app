INSERT INTO Toppings (ToppingName, IsVegan, IsGlutenFree) VALUES 
('Pepperoni', 0, 0),
('Sausage', 0, 0),
('Ham', 0, 0),
('Bacon', 0, 0),
('Mozzarella Cheese', 0, 0),
('Parmesan Cheese', 0, 0),
('Cheddar Cheese', 0, 0),
('Ricotta Cheese', 0, 0),
('Vegan Cheese', 1, 1),
('Bell Peppers', 1, 1),
('Onions', 1, 1),
('Olives', 1, 1),
('Mushrooms', 1, 1),
('Spinach', 1, 1),
('Sun-dried Tomatoes', 1, 1),
('Kalamata Olives', 1, 1),
('Cilantro', 1, 1),
('Red Onions', 1, 1);
SELECT * FROM Toppings;
DBCC CHECKIDENT ('Toppings', RESEED, 1);
INSERT INTO Crusts (CrustType, IsVegan, IsGlutenFree) VALUES
('Thin Italian', 0, 0),
('Stone Crust', 0, 0),
('Cheese Stuffed Crust', 0, 0),
('Vegan', 1, 0),
('Gluten-Free', 0, 1)
select * from Crusts
DBCC CHECKIDENT ('Crusts', RESEED, 1);
USE PizzaShop;
INSERT INTO pizzaCrust("pizzaCrust") VALUES
('Thin Italian'),
('Stone Crust'),
('Cheese Stuffed Crust'),
('Vegan'),
('Gluten-Free')
select * from pizzaCrust
DBCC CHECKIDENT ('pizzaCrust', RESEED, 1);
USE PizzaShop;
INSERT INTO sides ("sideName","price", "pictureName") VALUES
('Salad', 2.99, 'salad.jpg'),
('Garlic Bread', 3.50, 'garlicbread.jpg'),
('Cheesy Garlic Bread', 2.99, 'cheesygarlicbread.jpg'),
('Coleslaw', 3.50, 'coleslaw.jpg'),
('Chicken Wings', 2.99, 'chickenWings.jpg')
select * from sides
DBCC CHECKIDENT ('sides', RESEED, 1);
USE PizzaShop;
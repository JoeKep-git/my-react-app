INSERT INTO drinks ("drinkname", "litre", "price", "pictureName") VALUES
('Pepsi', 1, 2.99, 'pepsi1l.jpg'),
('Pepsi', 1.5, 3.50, 'pepsi1.5l.jpg'),
('Pepsi Max', 1, 2.99, 'pepsimax1l.jpg'),
('Pepsi Max', 1.5, 3.50, 'pepsimax1.5l.jpg'),
('Dr Pepper', 1, 2.99, 'drpepper1l.jpg'),
('Dr Pepper', 1.5, 3.50, 'drpepper1l.jpg'),
('7-up', 1, 2.99, '7-up1l.jpg'),
('7-up', 1.5, 3.50, '7-up1.5l.jpg'),
('Tango', 1, 2.99, 'tango1l.jpg'),
('Tango', 1.5, 3.50, 'tango1.5l.jpg')

DBCC CHECKIDENT ('drinks', RESEED, 1);

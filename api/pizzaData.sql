INSERT INTO Pizza (PizzaName, PizzaDescription, Price, SizeID, CrustID) VALUES 
('Margherita', 'Classic tomato sauce, fresh mozzarella, basil', 10.99, 3, 1), -- Margherita
('Pepperoni', 'Pepperoni, tomato sauce, mozzarella cheese', 11.99, 2, 2), -- Pepperoni
('Vegan Supreme', 'Vegan cheese, bell peppers, onions, olives, mushrooms, tomato sauce', 12.99, 3, 4), -- Vegan Supreme
('Gluten-Free Margherita', 'Classic tomato sauce, fresh mozzarella, basil on a gluten-free crust', 12.99, 2, 5), -- Gluten-Free Margherita
('Hawaiian', 'Ham, pineapple, tomato sauce, mozzarella cheese', 12.99, 3, 1), -- Hawaiian
('Vegan BBQ Chick''n', 'Vegan chick''n, BBQ sauce, red onions, cilantro, vegan cheese', 13.99, 3, 4), -- Vegan BBQ Chick'n
('Gluten-Free Veggie Delight', 'Bell peppers, onions, olives, mushrooms, tomato sauce on a gluten-free crust', 13.99, 3, 5), -- Gluten-Free Veggie Delight
('Meat Lovers', 'Pepperoni, sausage, bacon, tomato sauce, mozzarella cheese', 14.99, 3, 2), -- Meat Lovers
('BBQ Bacon', 'Bacon, BBQ sauce, red onions, mozzarella cheese', 13.99, 3, 1), -- BBQ Bacon
('Vegan Mediterranean', 'Spinach, sun-dried tomatoes, Kalamata olives, vegan cheese, tomato sauce', 14.99, 3, 4), -- Vegan Mediterranean
('Cheese Stuffed Crust Deluxe', 'Sausage, mushrooms, green peppers, onions, mozzarella cheese, stuffed crust', 15.99, 3, 1), -- Cheese Stuffed Crust Deluxe
('Vegan Margherita', 'Vegan mozzarella, fresh tomatoes, basil, tomato sauce', 12.99, 2, 4), -- Vegan Margherita
('Supreme', 'Pepperoni, sausage, green peppers, onions, olives, mushrooms, tomato sauce, mozzarella cheese', 15.99, 3, 2), -- Supreme
('Buffalo Chick''n', 'Spicy buffalo chick''n, red onions, ranch dressing, vegan cheese', 14.99, 3, 4), -- Buffalo Chick'n
('Gluten-Free BBQ Chick''n', 'BBQ chick''n, red onions, cilantro on a gluten-free crust', 13.99, 2, 5); -- Gluten-Free BBQ Chick'n
SELECT * FROM Pizza;
DBCC CHECKIDENT ('Pizza', RESEED, 1);

--NEDS CHANGING SO THAT SIZE ISNT INCLUDED BUT THE PRICE IS. (IN THE FRONT END/BACK END I WILL GET THE SIZE AND CALCULATE THE PRICE ie add on top of price)
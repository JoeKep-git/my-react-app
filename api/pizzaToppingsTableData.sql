-- Inserting toppings for the Margherita pizza 

--NEEDS CHANGING

INSERT INTO PizzaToppings (PizzaID, ToppingID)
VALUES
    (1, 5); -- Mozzarella Cheese

-- Inserting toppings for the Pepperoni pizza 
INSERT INTO PizzaToppings (PizzaID, ToppingID)
VALUES
    (2, 1), -- PepperoniMozzarella Cheese
    (2, 5) -- Mozzarella Cheese

-- Inserting toppings for the Vegan Supreme pizza 
INSERT INTO PizzaToppings (PizzaID, ToppingID)
VALUES
    (3, 9),  -- Vegan Cheese
    (3, 10),  -- Bell Peppers
    (3, 11),  -- Onions
    (3, 12),  -- Olives
    (3, 10); -- Mushrooms

-- Inserting toppings for the Gluten-Free Margherita pizza 
INSERT INTO PizzaToppings (PizzaID, ToppingID)
VALUES
    (4, 1), -- Tomato Sauce
    (4, 2), -- Mozzarella Cheese
    (4, 3); -- Basil

-- Inserting toppings for the Hawaiian pizza 
INSERT INTO PizzaToppings (PizzaID, ToppingID)
VALUES
    (5, 1), -- Tomato Sauce
    (5, 4), -- Ham
    (5, 5); -- Pineapple

--NEEDS CHANGING

SELECT * FROM PizzaToppings
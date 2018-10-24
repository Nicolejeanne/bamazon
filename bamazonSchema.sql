DROP DATABASE if exists bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB; 

CREATE TABLE products (
item_id integer auto_increment not null,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price Decimal(10,2) NOT NULL,
stock_quantity INTEGER NOT NULL,
primary key (item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values 
("Mascara", "Beauty", 20, 25),
("Plates", "Housewares", 7.99, 200),
("Soccer ball", "Sporting Goods", 35, 10),
("Bar stool", "Furniture", 79.99, 20),
("Track Jacket", "Apparel", 49.99, 15),
("Lip gloss", "Beauty", 2.95, 225),
("Picture Frame", "Housewares", 9.99, 45),
("Scooter", "Sporting Goods", 79, 7),
("Floor Lamp", "Furniture", 125, 3),
("Scarf", "Apparel", 24.95, 60);

SELECT * from products;
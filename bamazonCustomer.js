var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "12345sql",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the displayAllItems function after the connection is made to show the user all the products
  start();
});

// function which prompts the user to display items for sale
function start() {
  console.log("------------------------------------------------------");
  console.log("************ Welcome to my Bamazon Store! ************");
  console.log("------------------------------------------------------");
  inquirer
    .prompt({
      name: "showItems",
      type: "confirm",
      message: "Would you like to see all items available for sale?",
      default: true
    })
    .then(function(answer) {
      // based on their answer, either show the items or show goodbye message
      if (answer.showItems === true) {
        displayAllItems();
      } else {
        console.log("Sorry you don't feel like shopping! Try again later!");
        connection.end();
      }
    });
}

function displayAllItems() {
  connection.query(
    "SELECT item_id, product_name, price FROM products;",
    function(err, res) {
      if (err) throw err;
      console.table(res);
      whichProduct();
    }
  );
}

function whichProduct() {
  inquirer
    .prompt([
      {
        name: "whichProductToBuy",
        type: "input",
        message: "Which product ID would you like to purchase?",
        validate: function(value) {
          if (
            isNaN(value) === false &&
            parseInt(value) > 0 &&
            parseInt(value) <= 10
          ) {
            return true;
          }
          return false;
        }
      },
      {
        name: "qtyToBuy",
        type: "input",
        message: "How many of the item would you like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      connection.query(
        "SELECT * FROM products WHERE item_id = ?",
        [answer.whichProductToBuy],
        function(err, res) {
          if (err) throw err;
          else if (answer.qtyToBuy > res[0].stock_quantity) {
            console.log("--------------------------")
            console.log("Insufficient quantity in stock");
            console.log("This order has been cancelled!");
            console.log("--------------------------")
            newOrder();
          } else {
            let orderTotal = answer.qtyToBuy * res[0].price;
            console.log("--------------------------")
            console.log("Thank you for your order");
            console.log("Your order total is $" + orderTotal);
            console.log(
              "The " +
                res[0].department_name +
                " department will begin processing your order immediately!"
            );
            console.log("--------------------------")

            // Update SQL table
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                { stock_quantity: res[0].stock_quantity - answer.qtyToBuy },
                {
                  item_id: answer.whichProductToBuy
                }
              ],
              function(err, res) {
                if (err) throw err;
                newOrder();
              }
            );
          }
        }
      );
    });
}

//Allows the user to place a new order or end the connection
function newOrder() {
  inquirer
    .prompt({
      type: "confirm",
      name: "choice",
      message: "Would you like to place another order?"
    })
    .then(function(answer) {
      if (answer.choice === true) {
        start();
      } else {
        console.log("Thank you for shopping at Bamazon!");
        connection.end();
      }
    });
}

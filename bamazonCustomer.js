var mysql = require("mysql");
var inquirer = require("inquirer");

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
connection.connect(function (err) {
  if (err) throw err;
  // run the displayAllItems function after the connection is made to show the user all the products
  start();
});

// function which prompts the user to display items for sale
function start() {
  inquirer
    .prompt({
      name: "showItems",
      type: "confirm",
      message: "Would you like to see all items available for sale?",
      default: true
    })
    .then(function (answer) {
      // based on their answer, either show the items or show goodbye message
      if (answer.showItems === true) {
        displayAllItems();
      } else {
        console.log("Sorry you don't feel like shopping! Try again later!")
      }
    });
}

function displayAllItems() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
    howMany();
  });
  
}
/*
function howMany() {
  inquirer
    .prompt({
      name: "qtyToBuy",
      type: "input",
      message: "How many of the item you would like to purchase?",
    })
    .then(function (answer) {
      // based on their answer, either show the items or show goodbye message
      if (answer is not available) {
        console.log("Insufficient quantity in stock!");
      } else {
        // update database
        // show the customer the total of their purchase
        console.log("Thanks for your purchase!")
        start();
      }
    });*/

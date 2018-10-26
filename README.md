# mySQL-storefront-app

## mySQL Assignment

I am currently a student in the UT Austin Coding Bootcamp. after spending a few months on client-side development, we are beginning to learn about the back-end. Our week 14 assignment is to create a command line node app that utilizes a mySQL database. The app will take in orders from customers and deplete stock from the store's inventory.

### Setup

1. You will need to clone this repository.

2. You will then need to have the MySQL open source software on your computer. I recommend using MySQL Workbench.

   - The download can be found here: ![MySQL Workbench download page](https://dev.mysql.com/downloads/workbench/)

   - You will then need to open the `bamazonCustomer.js` file in a code editor and add your unique connection information.

     - Here is an example, follow the hints in the code comments if you need help:
       - host: "localhost",
       - port: 3306,
       - user: "root",
       - password: "",
       - database: "bamazon_DB"

   - You will then need to open the `bamazonSchema` file in MySQL Workbench and press the lightning button att he top left to create the database.

3. You will also need a few Node packages for this all to work. From the root folder for this app in your command line, install the following:

   - You can choose to rely on the dependencies in the package.json file and just load `npm install` in your command line, or you can load each package individually:

     - MySQL

       - Type `npm install mysql` into your command line. Allow it to finish installing then move on to the next...

     - Inquirer

       - Type `npm install inquirer` into your command line. Allow it to finish installing then move on to the next...

     - Console.table
       - Type `npm install console.table` into your command line. Allow it to finish installing then you're finished with this step.

### Using this app

- This app will ask the user questions to progress through its functionality.

1. On startup...

   - This app will display all of the items available for sale. To run the app type the following into your command line:

   `node bamazonCustomer.js`

   - The app will then give you the following information for all items available for "purchase" in an easy to read table:
     - Item ID
     - Name
     - Price
       Here is how it will look:

   ![Image of initial run](/images/firstTable.png)

2. Shopping

   - Answer the questions the app asks you to place your order!

     Here is how it will look:

   ![Image of ??](/images/spotify.png)

   ![Image of ??](/images/movie.png)

   ![Image of ??](/images/DoIt.png)

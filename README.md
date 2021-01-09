# Jennifer's online clinic
An exercise in invoking Zoom APIs

## Software Stack

1. Backend Server: Node.js
2. Database: MySql
3. Programming Language: JavaScript (Vanila)

## Node.js used modules

1. **body-parser:** Body parsing middleware.
2. **express:** A minimalist web framework we'll use for our server.
3. **mysql:** A MySQL driver.
4. **request:** A simple way to make HTTP calls.

## Installation

### Clone this GitHub Repository

git clode repository <https://github.com/fowzis/eleos.git>

### Installing Node.js

Download and install Node.js

Test your installation by running the following from the commandline

**`node -v && npm -v`**

### Installing Node.js used modules

Run the following command from to install Node.js used modules.

**`npm install body-parser express mysql request`**

### MySql

Download and install **MySql** and a DB management utility such as **phpMyAdmin**
Alternativly If you don't have MySQL installed, you can download **MAMP** for Windows. MAMP provides a free, local server environment and database. Once you have this downloaded, open the program and click Start Servers to start MySQL.

### Create the DB Schema

Use the CreateSchema.sql file, found in the cloned repository to create the database and the related tables. 

### Define Environment Variables

Define the following Environment Variables

- **`ELEOS_AUTH_KEY = <Zoom API Auth Key>`**
- **`ELEOS_DB_HOST = <Host Name / IP>  ex.: localhost`**
- **`ELEOS_DB_USER = <DB User>         ex.: root`**
- **`ELEOS_DB_PASS = <DB Pass>         ex.: root`**
- **`ELEOS_DB_NAME = <DB Name>         ex.: eleos_db`**

## Running The Application

Once all is installed and the DB Schema is created, run the application from the application folder as follows:

**`npm start`**

The following message should indicate that the express http server is listening on the specified port:

**`Server listening on port 9999`**

## Invoking the main page

From the code repository, open **`index.html`** in your default browser

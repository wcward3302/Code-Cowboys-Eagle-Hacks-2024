# Code-Cowboys-Eagle-Hacks-2024

**CowboyBooks - Automated Invoicing Application**
**This application is a prototype, some functionality is limited and/or unavailable.**

**Setup**
Our application is based on the next.JS framework. Setting up the application to run locally can be done in three steps:
1. Clone the repo or download the directory in it's entirety.
2. Ensure node.JS and NPM are installed on your machine, then run "npm i" to install dependencies.
3. The local development server can be started with the command "npm run dev"; for a deployment version, run "npm run build" then "npm run start".

_Note_ Two of the applications dependencies: OpenAI and next-auth require keys to be setup in the local ".env. file. You will need to create this file as it is not included in the repo for security reasons. See the following documentation for configuring the environment variables.
 - next-auth: https://next-auth.js.org/configuration/options
 - OpenAi: Your open AI key will depend on your personal account with OpenAI, information on OpenAI API keys can be found here:   https://platform.openai.com/account/api-keys
 - Vercel: Lastly, our deployment is hosted on Vercel and therefore uses a postgres database hosted through vercel, you can choose to configure your application this way, or use any other compatible database such as MongoDB.

Database Setup: The application requires a database connection with three tables: Customers, Invoices, Users. See the SQL statements for creation below:
- users:
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
- invoices:
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
  );
- customers:
    CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
      );

**Operation**
Upon first setup, you will need to modify or completely remove the "./middleware.ts" file in the root directory. This file controls the pages which require authentication, and without modifying this file or first linking to a database, you will be unable to get past the dashboard page. Configure your database, and then you will be able to use the register and login functionality.

The application is designed to utilize an openAI chatbot to allow the user to create, modify, and delete invoices. Two pages allow for quick filtering and searching of customers and invoices. Invoices and customers can be created manually, or with the chatbot.

**Future Plans / Notes**
- Current AI functionality is limited, occasionally non-functional.
- The application will continue to be developed to expand on available functions, and fix those that do not work.

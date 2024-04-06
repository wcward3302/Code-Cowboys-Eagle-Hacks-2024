# Code-Cowboys-Eagle-Hacks-2024

**CowboyBooks - Automated Invoicing Application**
**This application is a prototype, some functionality is limited and/or unavailable.**

**Overview**
Our website revolutionizes financial processes by centralizing the creation, tracking, and sending of invoices, alongside the seamless management of customer profiles. Through manual input or automated assistance via a chatbot, users can effortlessly generate in voices and modify customer profiles. Our AI-powered system interprets user input to generate invoices swiftly, storing all relevant customer information and invoice history securely in an implemented database. Upon completion, users are provided with options to print or export the invoice, facilitating easy communication with clients. With minimal user effort, our platform streamlines invoicing tasks for enhanced productivity and convenience.

**How It Works**
To access the functionality of our invoice service, users must sign in or create an account with us. Once the user has logged in, the user will be redirected to the dashboard. In the dashboard, the user has access to our chatbot, CowboyCompanion. Through CowboyCompanion, users can prompt our AI to perform four tasks: generate invoice, add customer profile, modify customer profile and delete customer profile. Once the user engages in conversation with CowboyCompanion,  they only need to provide the bot with the necessary attributes needed to complete the task. If the bot is missing necessary information to complete the task, the bot will ask the user to provide this information. Once our bot has all the necessary information to perform a task,  CowboyCampanion tells the user that the task has been completed and passes this information to a second OpenAI API to generate the SQL for the database entry and html formatted invoice. This information is transmitted back to the user, so that their invoice is stored in the database and the html is presented to the user. After this, the user can print and email the document to their customers and store their file in different file standards like PDF. 

On the dashboard page, there is also a sidebar menu to allow the user to navigate between their dashboard, invoices, and customers. Under the invoices tab, the user can view a list of all the invoices they have generated. Here they can view all the information tied to the invoice, including customer ID, invoice ID, invoice total, the date the invoice was created, and whether the invoice is paid or pending. Additionally clicking on the edit icon will display a preview of the invoice as weel as the option to manually altar any incorrect information or they can choose to delete a given invoice by selecting the trash can icon.  

The customer page showcases a detailed roster of client names and email addresses, empowering users to efficiently manage their customer base. Users can augment this list using the "create customer" button and modify customer details as needed. Furthermore, users possess the capability to delete customers, ensuring streamlined management. For security and account management purposes, users also have the option to sign out when necessary. 

 

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
- CowboyCompanion functionality is limited to the task of invoice Generation
- The application will continue to be developed to expand on available functions, and fix those that do not work.

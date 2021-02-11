# Flashcards
Flashcards is Quizlet inspired replica.

**Checkout the website [here](https://www.flashcards-qmax.cards/)**.


<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

## About The Project

Use Flashcards to:

- Create, read, and update operations flashcard sets
- Duplicate other users flashcard sets in order to create, read, and update your very own copy of the original flashcard set
- Search all public flashcard sets
- Study flashcard sets to prepare for a quiz, test, or exam

## Built With

- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [PostgreSQL](https://postgresapp.com/)
- [npm](https://www.npmjs.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Date-fns](https://date-fns.org/docs/)
- [React Spring](https://www.react-spring.io/)
- [knex](https://knexjs.org/)



## Getting Started

To setup project locally follow these steps:

## Prerequisites

* Node 14.3
* npm 6.14.6
* PostgreSQL 12.3

## Installation

1. [Install Node](https://nodejs.org/en/)

  * Once installed, if you're node version does not work with the project, change node version by running this command:
    ```sh
    nvm install 14.13.0
    ```

2. [Install PostgreSQL](https://postgresapp.com/)

  * Follow instructions on [Postgres.app](https://postgresapp.com/) for simple PostreSQL install

3. Create a ```development``` database

  * In terminal, enter: 
      
      ```sh 
      psql
      ```
      
  * When you enter the psql terminal enter:
  
      * Create User
          Create User w/ Password:
          ```sql 
          CREATE USER [username] WITH PASSWORD [password] CREATEDB;
          ```
         or
         
         Create User w/o Password:
          ```sql 
          CREATE USER [username] CREATEDB;
          ```
          *You do not need a password, either way will work. Make sure to include semi-colon or query will not execute*
          
       * Create Database
          ```sql 
          CREATE DATABASE [database_name];
          ```
          
  * You can check to see if the database was created by entering 
      ```sh 
      \l
      ```
      
  * You should see your database within the table of databases
 
  * Exit ```psql``` using ```exit``` command

### Server Setup

4. Create an ```.env``` file in the top level of the project ```server``` directory and add relevant information. Replace them with the variables you used above.(These env variables are used in the ```knexfile.js``` file if you want to directly change them.) 
  
      ```
        DEVELOPMENT_DATABASE_HOST=127.0.0.1
        DEVELOPMENT_DATABASE_USER=[username]
        DEVELOPMENT_DATABASE_PASSWORD=[password] // (If no password, leave blank)
        DEVELOPMENT_DATABASE_NAME=[database_name]
        JWT_SECRET: String (any alphanumeric string)
      ```
      
5. Run database migrations and seed database
    - ```cd``` into the project ```server``` directory
    - Run Database Migrations
    ```sh 
    knex migrate:latest
    ```
    - Run Database Seeds
    ```sh 
    knex seed:run
    ```
    
6. Start server
    ```npm run dev```

### Frontend/UI Setup
  
1. ```cd``` into ```client``` directory and run ```npm install```

2. Run ```npm start``` to start client

*Project will run on and proxy requests to Node API through localhost:3000*


<!--- ### Setup List
* Server Directory Setup
  * Npm Install
  * Check Postgres installation - https://postgresapp.com/
  * psql to setup database
    * development
    * test
  * knexfile
    * Create an env file
      * Auth
        * JWT_SECRET
      * Knex
        * DATABASE SETUP - ENV
          * Development
            * HOST
            * USER
            * PASSWORD
            * DATABASE
          * Test
            * HOST
            * USER
            * PASSWORD
            * DATABASE 
        * psql - Command Line
          * Type 'psql'
          * Type 'CREATE DATABASE [databasename];'
          * database created, repeat for test database if using it
   * npm run dev - Run project in development mode --->

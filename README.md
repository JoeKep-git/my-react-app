# PizzaTime

# React + Node + MSSQL + NextJS

# Getting Started with my app with NodeJS, React, NextJS MSSQL

Ensure you have docker installed. Then pull the repository and run the following command

# Do this first

Go into the `api` and `client` directory and run `npm install init`, if running outside docker.

Run the SQL files and make sure to be in the correct databse when doing so. Currently only need the scheme, toppings, sides and drinks.

Change the `CHANGEME.env` file to just `.env` and add the password of the database you want in quotes `"Example123!"`. Make sure this password meets MSSQL password requirements.
If you do not want to use the `.env` file then just change the password directly in the `yml` file. So instead of `${SA_PASSWORD}` it will be `"Example123!` if you do not want to use the `.env` file
Then change the file in the api directory called `CHANGEME.env` to `.env` and fill in the details as well as adding a `SECRET` for the session package to use.

## `docker-compose up`

This command will run the two docker files that then put React on the 3000 port and NodeJS on the 8000 port in an image. It will also create a database on port 1433.
Use docker desktop or CLI to run the images as containers.

## `docker-compose down`

This command will remove the containers which is useful when changes are done.

To run the server ensure docker is updated with the files and in docker desktop, in images, click the run icon and type the correct port and run it. This will need to be done for both REACT front end and NodeJS backend.

## `docker-compose build` `docker-compose up --build`
Use this command if you have updated the source files to ensure the images are updated. If you delete the database container then the database will be reset each time.

## **You will still need to import MSSQL into the NodeJS file to query the database in NodeJS**

## Do this to get the container running

In docker desktop go to your images. Here you will see that it has created 2 images named `my-app-docker-api` and `my-app-docker-client`. 

Click on the run button then expand the optional settings and set the port for the api container to `8000` and the port for the client container to `3000`.

The container on port `8000` is the NodeJS server and the container on port `3000` is ReactJS.

## Get Database up and running

Once the commands are done all you need to do to access the database is run the container that has already been created and then use what you would like to access the MSSQL server.

For example, with SQL Server Management Studio you would type `127.0.0.1,1433` for the SQL server. User would be SA (system administrator) and the password would be what you changed it to.

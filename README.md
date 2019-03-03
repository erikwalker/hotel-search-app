# hotel-search-app
A MongoDb, NodeJS, Express and AngularJS Hotel Search Application

An MEAN application that connects to a mongoDB database of hotels allowing CRUD operations on the Hotels and Reviews from customers.

# Summary:
• Import custom hotel data in JSON format into a local mongoDB
• Create mongoDB Schemas using mongoose so to post, query, update and delete data via REST webservice calls
• Designed webservice api in NodeJS and Express to CREATE, READ, UPDATE,and DELETE hotel and reviews data
• Developed a basic AngularJS UI to allow create, read, update and delete of Hotel and review data

## Steps
1.	Clone, checkout or fork master branch

2.	Do “npm install” in the root directory

3.	Install mongoDB locally

4.	Go to the bin directory where you have mongoDB installed and open a cmd console: 
    Eg.  \..\MongoDB\Server\4.0\bin
    
5.	Type: “mongod” in the shell to start the mongoDB server locally
** important this shell must be running all the time so that mongoDB server is up

6.	Now create a database and collection in the mongoDB database by importing json data
    a)	Open another command console in this directory where you checkout code:
          …\hotel-search-app
    b)	Type the following command in the console:

    mongoimport --db hotel-application --collection hotels --jsonArray hotel-search-app/api/data/hotel-data.json

    ![import-json-data](https://user-images.githubusercontent.com/19658505/53699431-19573a80-3db6-11e9-9398-e7b12c5bd2db.png)

    Now your database is ready!!

7.	Run npm i bcrypt --save  then tp start application with nodemon app.js

8.	Call a Web Service from postman:

    ![postman-hotel-search-service-call](https://user-images.githubusercontent.com/19658505/53699454-6cc98880-3db6-11e9-8a6b-2338ccf330a4.png)


The following REST Services are available to be called:

  ![node-rest-service-available](https://user-images.githubusercontent.com/19658505/53699476-9da9bd80-3db6-11e9-807e-010d55df8cc2.png)

9.	Can be done through UI as well:
    
    a)	Go to registration page and register a user name and password:
    
    ![registration](https://user-images.githubusercontent.com/19658505/53702876-ad86c900-3dd9-11e9-83d3-1c3cbd315975.png)

    b) After succesfully registering now provide username and password in login form:
    
    ![login-view-hotel](https://user-images.githubusercontent.com/19658505/53702984-8e3c6b80-3dda-11e9-9772-fda0ab9b721b.PNG)


    c) Now click a hotel to view and you can view the details about the hotel and leave a review.
    
    ![select-hotel-provide-review](https://user-images.githubusercontent.com/19658505/53702995-bc21b000-3dda-11e9-8bcb-00beef7c9aa7.PNG)


#### Number8 Technical Test - Brayan Quirino

_How to run the project_

##### 1º Set up MongoDB Docker environment

I did that to facilitate the database integration without set up on Atlas.

```javascript
 docker run --name mongodb -e MONGO_INITDB_ROOT_PASSWORD=mysecretpassword -e MONGO_INITDB_ROOT_USERNAME=myuser -d -p 27017:27017 mongo
```

_You can use MongoDB Compass to manage the data. [MongoDB Compass](https://www.mongodb.com/pt-br/products/compass)_


##### 2º Install dependencies

_Using yarn_

```javascript
 yarn install
```

##### 3º Run develop environment
```javascript
 yarn dev
```

##### _What's means each layer ?_

##### Routes [Go to the routes folder](./src/routes/Employee.routes.ts)

I created the routes to pass all the request data to controllers and return the response to the client.

Creating one file for each entity to help with code organization

##### Controllers [Go to the controller folder](./src/controllers/Employee/Employee.controllers.ts)

The controllers serve to validate the input data that will hit the service layer.

##### Services [Go to the service folder](./src/services/Employee/Employee.service.ts)

The service layer validates the business rules by accessing external services and getwars such as the database in this case.

##### _What would I have done with more time and dedication to the project?_

- Unit & Integration tests
- Added Joi validation or Class Validation to validate the input data 


Brayan Quirino - job.brquirino@gmail.com
[Linkedin](https://www.linkedin.com/in/brayanquirino/)
[GitHub](https://github.com/braydevkin)
# HNGx-Backend
Backend track tasks HNG using Node.js

# Person API

This is a simple REST API for managing persons. It allows you to perform CRUD operations on person resources. The API is built using Node.js, Express.js, and SQLite as the database.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Request/Response Examples](#usvalue-examples)
- [Usvalue Examples](#usvalue-examples)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [License](#license)
  
---
- [UML Diagrams](#uml)
  - [Class Diagram](#class-dg) 
  - [Architecture Model](#arch-dg) 

## Getting Started

### Prerequisites

To run this API, you need to have the following installed:

- Node.js (https://nodejs.org/)
- npm (Node Packvalue Manvaluer, comes with Node.js)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/JimmyKurui/HNGx-Backend.git
   
2. Navigate to the directory
   ```bash
   git switch stvalue-two  

3. Install the dependencies
    `npm install`
   
5. Configure the database
   Using sqlite, create the database in the databases folder and change paths as needed in routes.js

6. Start the server
To start the API, run the following command `npm start` for the start script. The API will then be live on `http://localhost:3000` . This port configuration can be changed from 3000 in the PORT constant variable in app.js

## API-endpoints

* **GET /api/:user_id?** 
* **PUT /api/:user_id** Update details of an existing person by ID.
* **DELETE /api/:user_id** Delete a person by ID.

### Create a Person 
* **Endpoint**: `POST /api`
* **Description**: Create a new person with name and value
* **Request Body**: 
```
{
  "name": "John Doe",
  "value": 30
}
```
* **Response:**
```
{
  "id": 1,
  "name": "John Doe",
  "value": 30
}
```
2. Retrieve a Person by ID
* **Endpoint**: `GET /api/user_id?`
* **Description**: Retrieve details of a person by ID. Without user_id it retrieves all records in the database as a default
* **Response**:

* /api/user_id
```
{
  "id": 1,
  "name": "John Doe",
  "value": 30
}
```
```
* /api
{
 {
  "id": 1,
  "name": "John Doe",
  "value": 30
 },
 {
   "id": 2,
   "name": "John Doe 2",
    "value": 31
 }

3. Update a Person by ID
* **Endpoint**: `PUT /api/:user_id`
* **Description**: Create a new person with name and value
* **Request Body**:

Request:
```
{
  "name": "Jane Smith",
  "value": 35
}
```
Response:
```
{
  "message": "[name] updated successfully"
}
```
4. Delete a Person (DELETE /api/:user_id)

Response:
```
{
    "message": "Person deleted successfully",
    "user": {
        "id": 8,
        "name": "Innoue",
        "value": 20
    }
}
```

## Testing
* Using Postman, an API testing tool. We can follow on test cases, validity and error handling. [Download Postman](https://www.postman.com/downloads/)
Put in your base url as local

### Error handling**
* You will receive a `400 Bad Request` if you make pass fields improperly. Name must be a string and value a number
* You will receive  `404 Not Found` if the queried resource does not exist
* A `500 Server Error` occurs when there is a server problem  

## License
This project is licensed under the MIT License.

## UML Diagrams
### Class Diagram

![class_diagram](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/6be799cf-e8c4-4d22-a1b2-b8b2d353e6dc)

### Architecture Model
![stvalue-two-arch](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/294172a7-f0ef-4137-aa69-af5847e53021)

# HNGx-Backend
Backend track tasks HNG using Node.js

# Person API

This is a simple REST API for managing persons. It allows you to perform CRUD operations on person resources. The API is built using Node.js, Express.js, and SQLite as the database.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Request/Response Examples](#usage-examples)
- [Usage Examples](#usage-examples)
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
- npm (Node Package Manager, comes with Node.js)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/person-api.git
   cd person-api

2. Install the dependencies
    `npm install`
   
### Running the API
To start the API, run the following command `npm start` for the start script. The API will then be live on `http://localhost:3000` . This port configuration can be changed from 3000 in the PORT constant variable in app.js

## API-endpoints

* **POST /api** Create a new person.
* **GET /api/:user_id?** Retrieve details of a person by ID. Without user_id it retrieves all records in the database as a default
* **PUT /api/:user_id** Update details of an existing person by ID.
* **DELETE /api/:user_id** Delete a person by ID.

## Request/Response Format
1. Create a Person (POST /api)

Request:
```
{
  "name": "John Doe",
  "age": 30
}
```
Response:
```
{
  "id": 1
}
```
2. Retrieve a Person (GET /api/:user_id)
   
Response:
```
{
  "id": 1,
  "name": "John Doe",
  "age": 30
}
```
3. Update a Person (PUT /api/:user_id)

Request:
```
{
  "name": "Jane Smith",
  "age": 35
}
```
Response:
```
{
  "message": "Person updated successfully"
}
```
4. Delete a Person (DELETE /api/:user_id)

Response:
```
{
  "message": "Person deleted successfully"
}
```

## Usage Examples
Here are some example API usage scenarios:

1. Create a new person: POST /api

3. Retrieve person details: GET /api/:user_id
![igetById](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/87f0ca4a-3641-4c20-b9b8-541ad1199bdd)

Without a user_id, all records are retrieved
![getAll](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/37ab590d-91de-4def-bbda-779e1735304b)

5. Update person details: PUT /api/:user_id
![update](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/f23cde9d-5b6a-4b9b-afc7-e5e1352bd978)

7. Delete a person: DELETE /api/:id
![delete](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/977737a9-95f4-4911-a978-a11f13aeb4bc)

## Testing
Using Postman, an API testing tool. We can follow on test cases, validity and error handling.

**Post / Put Routes**
* String Validity - 400

![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/a63bcb98-423f-41f8-b801-81bfb7671cdc)

* Number validity - 400
  
  ![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/19051f89-927b-412c-b4be-afaa3782a0db)

* Dynamic Parameters

![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/e6f1d184-603b-4afb-95e8-42be88099502)
![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/ddab5812-f748-473b-82d6-b25be3308cd8)

* Error handling
  
/api path check

![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/de6c8641-addf-4bba-9aa1-1154af12a0a0)

Bad Post - 404

![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/2b9e918d-0c3c-4fc4-b4b1-4bfce2d055db)

Bad Put - 404

![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/6680f94a-e34f-4b88-8974-75423b53649c)

Bad Get - 404

![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/9148e921-9935-44e0-9825-fbe30ae20236)

Bad Delete - 404

![image](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/4b160ab1-bfd3-4e76-848d-413888a78acc)

## Dependencies
* express - Node Framework
* sqlite3 - Database
 
## License
This project is licensed under the MIT License.

## UML Diagrams
### Class Diagram

![class_diagram](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/6be799cf-e8c4-4d22-a1b2-b8b2d353e6dc)

### Architecture Model
![stage-two-arch](https://github.com/JimmyKurui/HNGx-Backend/assets/71793888/294172a7-f0ef-4137-aa69-af5847e53021)

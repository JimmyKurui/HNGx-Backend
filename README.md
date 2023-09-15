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
- [Request/Response Examples](#requestresponse-examples)
- [Usage Examples](#usage-examples)
- [Testing](#testing)
- [Dependencies](#dependencies)
- [License](#license)

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
    <npm install>

3. To start the API, run the following command:
    <npm start> The API will run on `http://localhost:3000`

### API-endpoints

POST /api: Create a new person.
GET /api/:id: Retrieve details of a person by ID.
PUT /api/:id: Update details of an existing person by ID.
DELETE /api/:id: Delete a person by ID.
Request/Response Examples
Create a Person (POST /api)
Request:
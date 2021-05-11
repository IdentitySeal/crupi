# crupi - Zuri CRUD API

This is a CRUD rest api application with mongoDB database.

## Install and Use

Start by cloning this repository

```sh
# HTTPS
$ git clone https://github.com/IdentitySeal/crupi.git
```

then

```sh
# cd into project root and install dependencies
$ npm i
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file following the sample in the .env.example file

`DB_NAME`
`DB_PASSWORD`


## Start Server

```sh
# start the api server
$ npm start
```

## Code Structure

```bash
│
├── /src
│   ├── /controller
│   │   └── index.js
│   │
│   ├── /model
│   │  └── index.js
│   │
│   ├── /routes
│   │   └── index.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── Procfile
├── README.md
├── package-lock.json
└── package.json
```
## Hosting

The API is hosted on heroku [https://gentle-reaches-97265.herokuapp.com](https://gentle-reaches-97265.herokuapp.com)

## API Routes

<table>
	<thead>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/users/</td>
            <td>Create a new user</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/users/</td>
            <td>Get all users</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/users/:id</td>
            <td>Get a single user</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/api/users/update/:id</td>
            <td>Update a user</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/users/:id</td>
            <td>Delete a user</td>
        </tr>
    </tbody>
</table>

## API Testing Endpoints

- Create a user 
    - POST => `https://gentle-reaches-97265.herokuapp.com/api/users`

- Get a user
    - GET => `https://gentle-reaches-97265.herokuapp.com/api/users/:id`

- Get all users
    - GET => `https://gentle-reaches-97265.herokuapp.com/api/users`

- Update a user
    - PUT => `https://gentle-reaches-97265.herokuapp.com/api/users/:id`

- Delete a user
    - DELETE => `https://gentle-reaches-97265.herokuapp.com/api/users/:id`
    

## Author

- [Timi](https://www.github.com/identityseal)

  

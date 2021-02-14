<h1 align="center">Rest Api Vanilla JS<br>( Javascript )</h1>

<p align="center">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--NMQU6rfQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/Nh6IfFz.png" width="400"/>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/nodemon-2.0.6-blue">
    <img src="https://img.shields.io/badge/uuid-8.3.1-brightgreen">
</p>

<p align='justify'>This repo contains my exercise about making a REST API without using back end web application framework such ExpressJS, Hapi, Fastify and its kind. Only use vanilla js. There is several endpoint i created and of course almost every endpoint have validation. In this repo i stored data in JSON file, not database such as pstgres, sql or mongodb.</p>

## Features

- REST API With Only Vanilla JS
- Input Validation
- Create Data To File JSON
- Read Data From File JSON
- Update Data To File JSON
- Delete Data From File JSON
- Regex For Identification Request URL API
- UUID For Generate New Data ID

## Documentation API

#### 1 . **Get All Data**

- **Method** : **`GET`**
- **Request** : **`http://localhost:5000/api/products`**
- **Response** :
  ```
  [
    {
        "id": "1",
        "name": "Phone",
        "description": "It's a Phone",
        "price": 89.99
    },
    {
        "id": "2",
        "name": "Playstation",
        "description": "It's a Playstation",
        "price": 599.99
    },
    {
        "id": "3",
        "name": "Laptop",
        "description": "It's a Laptop",
        "price": 929.99
    }
  ]
  ```

#### 2 . **Get Data By Id**

- **Method** : **`GET`**
- **Request** : **`http://localhost:5000/api/products/:id`**
- **Response** :
  ```
  {
    "id": "1",
    "name": "Phone",
    "description": "It's a Phone",
    "price": 89.99
  }
  ```

#### 3 . **Create New Data**

- **Method** : **`POST`**
- **Request** : **`http://localhost:5000/api/products`**

  ```
  {
    "title": "Headset",
    "description": "This Is Headset",
    "price": 100
  }
  ```

- **Response** :

  ```
  {
    "id": "5c45fe45-3728-47b6-9db7-661351c36d1d",
    "title": "Headset",
    "description": "This Is Headset",
    "price": 100
  }

  ```

#### 4 . **Update Data**

- **Method** : **`PUT`**
- **Request** : **`http://localhost:5000/api/products/:id`**

  ```
  {
    "title": "Headset",
    "description": "This Is Headset",
    "price": 100
  }
  ```

- **Response** :

  ```
  {
    "id": "5c45fe45-3728-47b6-9db7-661351c36d1d",
    "title": "Headset",
    "description": "This Is Headset",
    "price": 100
  }

  ```

#### 5 . **Delete Data**

- **Method** : **`DELETE`**
- **Request** : **`http://localhost:5000/api/products/:id`**
- **Response** :

  ```
  {
    "message": "Product ${ID} removed"
  }

  ```

## How To Install

1. Git clone [Javascript-RestApiVanillaJs](https://github.com/aldoignatachandra/Javascript-LinkedList) or download zip.
2. Open in your code editor ( vscode, atom or other ).
3. Install the dependencies by running ( `yarn install` )
4. Execute the code using ( `yarn dev` )
5. Try all Rest API in this repo using `POSTMAN` or `INSOMNIA`
6. See json data in ( `./data/products.json` ) changing after execute every API

[ISC](https://en.wikipedia.org/wiki/ISC_license "ISC")

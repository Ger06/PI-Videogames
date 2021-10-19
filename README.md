<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Videogames

<p align="right">
  <img height="200" src="./videogame.png" />
</p>

### About
In this SPA you will be able to search for recipes using multiple filters and you can also create your own recipes. This project was an individual assignment requested at soyHenry's bootcamp (and my first proyect ever!)

- *Front-end*: React.js, Redux.js, plain CSS / CSS Modules.

- *Back-end*: Node.js, Express.js

- *DB*: PostgreSQL (ORM: Sequelize)

- *External API*: rawg (https://rawg.io/apidocs)

## Installation (run from localhost)

*You'll need Nodejs and PostgreSQL installed in your computer*

- Clone this repo in a new folder/directory in your machine
- Install all dependencies inside ./api folder (npm install)
- Install all dependencies inside ./client folder (same thing)
- Create a postgres database (name it 'videogame')
- Go to https://rawg.io/login?forward=developer and create an account in order to obtain an apiKey
- Once you have your apiKey, create a .env file in ./api with the following:
    
        DB_USER={your postgres username}
        DB_PASSWORD={your postgres password}
        DB_HOST=localhost
        DB_NAME={your postgres database name}
        API_KEY_1={your rawg apiKey}

- Open a terminal and run ```npm start``` on ./api
- Open another terminal and run ```npm start``` on ./client

## Disclaimer
All images shown in this project were obtained from the internet and are used with the sole and unique intention of fulfilling an educational assignment. This project is not intended nor allowed to be used for commercial purposes or the like. No legal ownership or copyright is claimed on the above-mentioned images, belonging to their rightful owners. If you have comments or complaints in this regard, please contact me at gerardo.kohatus@gmail.com for further discussion.

### Landing page
<p align='left'>
    <img src='https://user-images.githubusercontent.com/82271110/137954140-04a16f03-3a78-496c-ba5a-f9bd228ec1e5.png' </img>
</p>

### Home
<p align='left'>
    <img src='https://user-images.githubusercontent.com/82271110/137954833-4cb530cc-0f07-4f41-a3b1-29f173d6687c.png' </img>
</p>

### Detail Game
![Detail](https://user-images.githubusercontent.com/82271110/137955991-c1a9a970-9fdd-49d2-abb8-37e403430c25.png)


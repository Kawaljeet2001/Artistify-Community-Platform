
# Artistify Community Platform

A platform designed for leading digital artists around the globe to showcase their work and create an online presence for their brand.
Create your portfolio, demonstrate your talent to recruiters and pave the way ahead for your bright career as an artist.






![Logo](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2Flogo_full.png?alt=media&token=b8102169-d7d3-4f4c-8dbc-212066713027)


## Idea behind the project

[Documentation](https://linktodocumentation)


## Demo

Live hosted link: [Site Link](https://artistifycommunity.netlify.app/)

Projct Demo link: [Demo Link](https://artistifycommunity.netlify.app/)


## Dev Tools/Technologies
The app includes many characteristic features:

- **JWT Authentication** to securely signin in and avail the services as a registered user.
- **Reset / Forgot / Lost password** retrieval system.
- **Nodemailer** used for template based emails for reset-password and signup.
- Seamless content creation using **Firebase Storage** engine.
- Implemented **Lazy-loading** to optimize component and image loading.
- Added **Route-based Code Splitting** for reducing js-bundle size on app loading.
- **Redux** is used for proper state management in the client side.
- Api request handled using **axios**
- Form fields managed using **React-Hook-Form**.
- **Tailwind CSS**, utility for rapid styling using classes.
- Used **React-easy-crop** package to enable image cropping/scaling feature.
- **react-toastify** is used for sounding alerts and error management.
- SVG icons referred from **react-icons**.
- Server-side deployed on **Heroku**.
- React SPA deployed on **Netlify**.



## App Screenshots

![Home page](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![Auth Pages](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Light Blue | ![#13aff0](https://via.placeholder.com/10/13aff0?text=+) #13aff0 |
| Dark Black | ![#171717](https://via.placeholder.com/10/171717?text=+) #171717 |
| Slate Green | ![#10b981](https://via.placeholder.com/10/10b981?text=+) #10b981 |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server directory

`DATABASE_CONNECTION_URL`

`JWT_TOKEN_KEY`

`GMAIL_APP_PASSWORD`

`GMAIL_APP_USER`

`PORT`




## Installation

Follow the steps to setup a developement environment for this app:

- Clone this repo. Use the command, or simple download the zip file for code
```bash
  git clone https://github.com/Kawaljeet2001/Artistify-Community-Platform.git
```

- Setting up server dependencies
```bash
  cd ./server
  yarn install or npm install
```

- Create .env file and add in all the environment variables

- Setting up client dependencies
```bash
  cd ./client
  yarn install or npm install
```

- Starting the dev servers
```bash
  cd ./client
  yarn start

  
  cd ./server
  nodemon server or npm start
```
- You'll also need to create a MongoDB Atlas Cluster and add the database connection url in the env variables
    

# Artistify Community Platform

A platform designed for leading digital artists around the globe to showcase their work and create an online presence for their brand.
Create your portfolio, demonstrate your talent to recruiters and pave the way ahead for your bright career as an artist.






![Logo](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2Flogo_full.png?alt=media&token=b8102169-d7d3-4f4c-8dbc-212066713027)


## Idea behind the project

There are a lot of digital artists/game developers who are making great digital artworks,indie games, animated videos, etc. But there is a lack of platforms where they can create their portfolio, showcase their artworks and also, send their profiles to potential recruiters for job oppurtunities.

Hence, Artistify was made to enable individual artists to easily create their online portfolio, establish their brand's online presence, connect with other fellow community members and pave a way for their great career as an artist.


## Demo

Live hosted link: [Site Link](https://artistifycommunity.netlify.app/)

Projct Demo link: [Demo Link](https://youtu.be/E302nz_ihtA)


## Dev Tools/Technologies
The app includes many characteristic features:

- Client side code written in **React**
- **Node** and **Express** used for server side code.
- **MongoDB Atlas** is used for being fast, scalable, and document based database.
- Seamless content creation using **Firebase Storage** engine.
- **JWT Authentication** to securely signin in and avail the services as a registered user.
- **Reset / Forgot / Lost password** retrieval system.
- **Nodemailer** used for template based emails for reset-password and signup.
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

![Home page](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2812).png?alt=media&token=ac40ce9f-e27e-4e14-9e6f-c2dc14fc65b1)

![Home page](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2813).png?alt=media&token=8874699c-98a9-4167-9a1c-191e49c1f924)

![Home page](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2814).png?alt=media&token=fb459960-49ab-4816-ac66-470585668821)

![Signin Page](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2815).png?alt=media&token=8ec3ef23-eedc-4d27-a273-e88d9a927853)

![Signup Page](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2820).png?alt=media&token=45cf2520-bb14-4d98-ae3d-95f5810e8baf)

![Dashboard](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2816).png?alt=media&token=88e11924-1316-462a-90cf-998b3177d884)

![Artwork Detail](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2817).png?alt=media&token=b7aa56d8-2b27-400f-aece-27904fa68024)

![Settings Profile](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2818).png?alt=media&token=1249a659-5c82-4c59-8423-32984a1a331b)

![Create New Artwork](https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2FScreenshot%20(2819).png?alt=media&token=cc7202e7-d14a-4df4-964e-7ebc3cc3453a)




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
    
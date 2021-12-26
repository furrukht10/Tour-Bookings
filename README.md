
 <p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#Demo">Demo</a> •
  <a href="#api-usage">API Documentation</a> •
  <a href="#To Do">To-Do</a> •

</p>

A tour booking application where users can login and book mock tours!
- A Full-Stack application designed with Node.js, Express.js, PUG, MongoDB
- Developed with a RESTful API that supports CRUD Operations on MongoDB
- Allows users to login and book tours using Stripe

## How To Use

### Deployed version: https://tour-bookings-app.herokuapp.com/
<aref id="useage">How To Use
  
You can view different types of tours all over the world. Login as a user and book different tours!
To view more login information, view the API. Otherwise, use these sample users to login and book.

```
email: chris@example.com
password: pass1234

email: laura@example.com
password: pass1234

```

In order to make mock credit-card payments. Use the following test credit card provided by Stripe.

```
Number: 4242 4242 4242 4242
Expiry: Any Month/ Any Year
CVC: Any 3 Digits
```
## Demo

![Tour _ Home](https://user-images.githubusercontent.com/79553858/147397567-90434da1-1eba-4fcf-bc0e-50509db7da0e.gif)
![Tour _ Tours](https://user-images.githubusercontent.com/79553858/147397581-3557c9ad-ba9f-4693-b0c4-5879d77d1725.gif)
![Tour _ All Tours](https://user-images.githubusercontent.com/79553858/147397615-db23a65f-cd4d-4b98-bced-564459d23e25.gif)![Tour _ Log into your account](https://user-images.githubusercontent.com/79553858/147397665-cc3f1818-763b-40fb-a71c-da64fd33e00c.gif)
![Tour _ TBooking](https://user-images.githubusercontent.com/79553858/147397678-c0722214-0ff2-44cf-b22c-785c358ab19f.gif)




## API Documentation

This application uses a RESTful API that supports CRUD operations on the MongoDB Database.
You are able to:
  - Create Tours (admins only)
  - Get All Tours
  - Update Tours (admins only)
  - Delete Tours (admins only)
  - etc...

To view the full documentation of the API: please check out...
https://documenter.getpostman.com/view/4237486/S1LwxnaE

## To Do
- Fix Mapbox glitches
- Fix booking functionality
- Implement sign-up functionality

<hr>
* This project was designed under the supervision of Jonas Schmedtmann and his Node.Js + Advanced SCSS course. *

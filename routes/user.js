const express = require('express');
const userRoute = express.Router();
const handler = require('../handler/user');

//API endpoint to POST single user field
userRoute.post('/user', handler.insertSingleUserData);

//API endpoint to POST multiple user field
userRoute.post('/user', handler.insertMultipleUserData);
//API endpoint to get single user info 
userRoute.get('/user/:userId', handler.getSingleUserData);
//API endpoint to get multiple user data
userRoute.get('/user', handler.getMultipleUserData);

module.exports = {
    userRoute
}
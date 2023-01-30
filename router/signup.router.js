const express = require('express');
const { signUpController } = require('../connector/login/signUp.controller');

const signUp = express.Router();

signUp.post('/',signUpController)


module.exports = signUp;
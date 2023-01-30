const express = require('express');
const { loginController } = require('../connector/login/login.controller');

const login = express.Router();

login.post('/',loginController)


module.exports = login;
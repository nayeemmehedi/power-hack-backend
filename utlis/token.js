const jwt = require('jsonwebtoken');


module.exports.tokenCreate = function(value){
    let SECRATE = "80ad9c7351a9329123e077b034b83637da09f488aca19774d09cb8202e70ce469739cc0885cb69fc8e89e18150d232a526773db429e89b66a2b19b418bec1324"

    const token = jwt.sign(value, SECRATE , { expiresIn: '1h' });
    return token;

}

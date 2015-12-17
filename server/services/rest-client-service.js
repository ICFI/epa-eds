"use strict";

var bodyParser = require("body-parser");




module.exports = function(searchProxy, app) {
    app.use(bodyParser.json()); 
    

}
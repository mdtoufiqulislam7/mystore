const express= require("express");
const { getinformation, gettow, readinformation } = require("../controlars/user.conrolars");
const route = express.Router();



route.get("/",getinformation);

route.get("/name",gettow);

route.post("/",readinformation)

module.exports = route;
const {Router}=require("express")
const { Signup, Login } = require("../Controllers/User.controller");
const { authorisation } = require("../Middlewares/Authentication");

const AllRoutes = Router();

// User routes
AllRoutes.post("/signup", Signup);
AllRoutes.post("/login", Login);

module.exports=AllRoutes;
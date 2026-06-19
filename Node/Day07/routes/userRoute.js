import express from 'express'
import { userRegister, userLogin, getUser } from "../controllers/userController.js";

const route = express.Router()

route.post('/register',userRegister)
route.post('/login',userLogin)
route.get('/all',getUser)

export default route;

// http://localhost:5000/api/user/register
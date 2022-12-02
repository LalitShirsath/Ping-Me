import express from "express";
import { get } from "mongoose";

import { addUser,getUsers } from "../controller/user-controller.js";

const route = express.Router();

route.post("/add",addUser);
route.get('/users',getUsers);

export default route;
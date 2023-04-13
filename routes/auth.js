import { Router } from "express";
import { allUsers } from "../routeActions/authActions.js";

const route = Router();

route.get("/signin", allUsers);

export default route;

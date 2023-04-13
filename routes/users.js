import { Router } from "express";
import { allUsers } from "../routeActions/usersActions.js";

const route = Router();

route.get("/users", allUsers);

export default route;

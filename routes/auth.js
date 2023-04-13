import { Router } from "express";
import { signin } from "../routeActions/authActions.js";

const route = Router();

route.post("/signin", signin);

export default route;

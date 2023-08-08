import express from "express";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(express.json());
HelloController(app);
TuitsController(app);
UserController(app);
app.use(cors())
app.listen(4000);

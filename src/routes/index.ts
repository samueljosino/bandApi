import { Router } from "express";
import { bandRouter } from "./band";
import { instrumentRouter } from "./instrument";
import { musicianRouter } from "./musician";

const routes = Router();

routes.use("/band", bandRouter);

routes.use("/musician", musicianRouter);

routes.use("/instrument", instrumentRouter);

// find create update delete findbyid
export { routes };

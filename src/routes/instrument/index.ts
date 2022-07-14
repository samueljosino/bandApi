import { Request, Response, Router } from "express";
import { InstrumentController } from "../../controllers/instrumentController";

const instrumentRouter = Router();

instrumentRouter.get("/", InstrumentController.find);

instrumentRouter.post("/", InstrumentController.create);

instrumentRouter.patch("/:id/", InstrumentController.update);

instrumentRouter.delete("/:id", InstrumentController.delete);

instrumentRouter.get("/:id", InstrumentController.findById);

// find create update delete findbyid

export { instrumentRouter };

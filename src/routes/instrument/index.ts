import { Request, Response, Router } from "express";
import { InstrumentController } from "../../controllers/instrumentController";

const instrumentRouter = Router();

instrumentRouter.get("/", InstrumentController.findAll);

instrumentRouter.post("/", InstrumentController.create);

instrumentRouter.patch("/:id/", InstrumentController.update);

instrumentRouter.delete("/:id", InstrumentController.delete);

instrumentRouter.get("/:id", InstrumentController.findById);

export { instrumentRouter };

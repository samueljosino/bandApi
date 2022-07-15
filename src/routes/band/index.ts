import { Router } from "express";
import { BandController } from "../../controllers/BandController";

const bandRouter = Router();

bandRouter.get("/", BandController.findAll);

bandRouter.post("/", BandController.create);

bandRouter.patch("/:id", BandController.update);

bandRouter.delete("/:id", BandController.delete);

bandRouter.get("/:id", BandController.findById);

// bandRouter.get("/name", BandController.findByName);

export { bandRouter };

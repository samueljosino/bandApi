import { Router } from "express";
import { BandController } from "../../controllers/BandController";

const bandRouter = Router();

bandRouter.get("/", BandController.find);

bandRouter.post("/", BandController.create);

bandRouter.patch("/:id", BandController.update);

bandRouter.delete("/:id", BandController.delete);

bandRouter.get("/:id", BandController.findById);

export { bandRouter };

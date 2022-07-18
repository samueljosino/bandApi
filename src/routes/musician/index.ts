import { Router } from "express";
import { MusicianController } from "../../controllers/MusicianController";

const musicianRouter = Router();

musicianRouter.get("/", MusicianController.findAll);

musicianRouter.post("/", MusicianController.create);

musicianRouter.patch("/:id", MusicianController.update);

musicianRouter.delete("/:id", MusicianController.delete);

musicianRouter.get("/:id", MusicianController.findById);

export { musicianRouter };

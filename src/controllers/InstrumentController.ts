import { NextFunction, Request, Response } from "express";
import { InstrumentsService } from "../services/InstrumentService";

class InstrumentController {
  static async findAll(req: Request, res: Response, next: NextFunction) {
    const response = await InstrumentsService.findAll();
    res.status(200).json(response);
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    const { name, type, musicianId } = req.body;
    const response = await InstrumentsService.create(musicianId, name, type);
    res.status(200).json(response);
  }

  static update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { name } = req.body;
    const response = InstrumentsService.update(id as any, name);
    res.status(200).json(response);
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const response = await InstrumentsService.delete(Number(id));
    res.status(200).json(response);
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const response = await InstrumentsService.findById(Number(id));
    res.status(200).json(response);
  }

  // static async findByName(req: Request, res: Response, next: NextFunction) {
  //   const { name } = req.query;
  //   console.log(name);
  //   const response = await InstrumentsService.findByName(name.toString());
  //   res.status(200).json(response);
  // }
}
export { InstrumentController };

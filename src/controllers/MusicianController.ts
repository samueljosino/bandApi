import { NextFunction, Request, Response } from "express";
import { MusiciansService } from "../services/MusicianService";

class MusicianController {
  static async findAll(req: Request, res: Response, next: NextFunction) {
    // console.log(req.query);
    // console.log(
    //   "Esse controller lista todos os dados dos musicos que esta no query");
    const response = await MusiciansService.findAll();
    res.status(200).json({ response });
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    // console.log("Esse controller cria um musico");

    const { name, style } = req.body;
    const response = await MusiciansService.create(name, style);

    res.status(200).json({ response });
  }

  static update(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    // console.log(
    //   `Esse controller atualiza um musico especifico pelo id ${req.params.id}`
    // );
    const { id } = req.params;
    const { name } = req.body;
    const response = MusiciansService.update(id as any, name);
    res.status(200).json({ response });
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    // console.log(req.params);
    // console.log(
    //   `este controller apaga um musico especifico com id ${req.params.id}`);
    const { id } = req.params;
    const response = await MusiciansService.delete(Number(id));
    res.status(200).json({ response });
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    // console.log(req.params);
    // console.log(
    //   `este controller busca por um musico especifico de id ${req.params.id}`
    // );
    const { id } = req.params;
    const response = await MusiciansService.findById(Number(id));
    res.status(200).json({ response });
  }

  // static manyToOne(req: Request, res: Response, next: NextFunction) {
  //   console.log(req.params);

  //   res.status(200).json({});
  // }
}

export { MusicianController };

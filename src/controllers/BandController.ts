import { NextFunction, Request, Response } from "express";
import { BandsService } from "../services/BandsService";

class BandController {
  static async findAll(req: Request, res: Response, next: NextFunction) {
    // console.log(req.query);
    // console.log("Esse controller lista todos os dados das bandas que esta no query" );
    const response = await BandsService.findAll();
    res.status(200).json(response);
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    // console.log("Esse controller cria uma  banda") ;
    // res.status(200).json({});
    const { name, style, band_musician_Id, studioName } = req.body;
    const response = await BandsService.create(
      band_musician_Id,
      name,
      style,
      studioName
    );
    res.status(200).json(response);
  }

  static update(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    // console.log( `Esse controller atualiza uma banda espeficida pelo id ${req.params.id}` );
    const { id } = req.params;
    const { name } = req.body;
    const response = BandsService.update(id as any, name);
    res.status(200).json(response);
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    // console.log(req.params);
    // console.log(`este controller apaga uma banda especifica com id ${req.params.id}`);
    const { id } = req.params;
    const response = await BandsService.delete(Number(id));
    res.status(200).json(response);
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    // console.log(req.params);
    // console.log(`este controller busca por uma banda especifico de id ${req.params.id}`);
    const { id } = req.params;
    const response = await BandsService.findById(Number(id));
    res.status(200).json(response);
  }

  // static async findByName(req: Request, res: Response, next: NextFunction) {
  //   const { name } = req.query;
  //   console.log(name);
  //   const response = await BandsService.findByName(name.toString());
  //   res.status(200).json(response);
  // }
}

export { BandController };

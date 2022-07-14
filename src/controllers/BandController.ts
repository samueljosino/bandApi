import { NextFunction, Request, response, Response } from "express";
import { BandsService } from "../services/BandsService";

class BandController {
  static findAll(req: Request, res: Response, next: NextFunction) {
    // console.log(req.query);
    // console.log(
    //   "Esse controller lista todos os dados das bandas que esta no query"
    // // );
    const response = BandsService.findAll();
    res.status(200).json(response);
  }

  static create(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    // console.log("Esse controller cria uma  banda") ;
    // res.status(200).json({});
    const { id, name, style } = req.body;
    const response = BandsService.create(id, name, style);
    res.status(200).json(response);
  }

  static update(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    console.log(
      `Esse controller atualiza uma banda espeficida pelo id ${req.params.id}`
    );
    res.status(200).json({});
  }

  static delete(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    console.log(
      `este controller apaga uma banda especifica com id ${req.params.id}`
    );
    res.status(200).json({});
  }

  static findById(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    console.log(
      `este controller busca por uma banda especifico de id ${req.params.id}`
    );
    res.status(200).json({});
  }
}

export { BandController };

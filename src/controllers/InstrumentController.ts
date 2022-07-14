import { NextFunction, Request, Response } from "express";

class InstrumentController {
  static find(req: Request, res: Response, next: NextFunction) {
    console.log("esse controller é para busca!!");
    console.log(req.query);
    // geralmente no get usamos apenas o query
    res.status(200).json({});
  }

  static create(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    // no post é pra utilizar o body
    console.log("este controller é para criação");
    res.status(200).json({});
  }

  static update(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    console.log(
      `este controller atualiza um instrumento de id ${req.params.id} `
    );
    res.status(200).json({});
  }

  static delete(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    console.log(`este controller apaga um instrumento com id ${req.params.id}`);
    res.status(200).json({});
  }

  static findById(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    console.log(
      `este controller busca por um instrumento especifico de id ${req.params.id}`
    );
    res.status(200).json({});
  }
}
export { InstrumentController };

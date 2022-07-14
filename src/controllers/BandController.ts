import { NextFunction, Request, Response } from "express";

class BandController {
  static find(req: Request, res: Response, next: NextFunction) {
    console.log(req.query);
    console.log(
      "Esse controller lista todos os dados das bandas que esta no query"
    );
    res.status(200).json({});
  }

  static create(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    console.log("Esse controller cria uma banda");
    res.status(200).json({});
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

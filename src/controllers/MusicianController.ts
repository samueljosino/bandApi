import { NextFunction, Request, Response } from "express";

class MusicianController {
  static find(req: Request, res: Response, next: NextFunction) {
    console.log(req.query);
    console.log(
      "Esse controller lista todos os dados dos musicos que esta no query"
    );
    res.status(200).json({});
  }

  static create(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    console.log("Esse controller cria um musico");
    res.status(200).json({});
  }

  static update(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    console.log(
      `Esse controller atualiza um musico especifico pelo id ${req.params.id}`
    );
    res.status(200).json({});
  }

  static delete(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    console.log(
      `este controller apaga um musico especifico com id ${req.params.id}`
    );
    res.status(200).json({});
  }

  static findById(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    console.log(
      `este controller busca por um musico especifico de id ${req.params.id}`
    );
    res.status(200).json({});
  }
}

export { MusicianController };

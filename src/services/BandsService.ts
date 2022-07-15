import { getRepository } from "typeorm";
import { Band } from "../entities/Band";

export class BandsService {
  static async findAll() {
    // console.log("aqui vai retornar todos as bandas");
    // return "retorno do findAll";
    const bandRepository = getRepository(Band);
    const bands = await bandRepository.find();
    console.log(bands);
    return bands;
  }

  static async create(name: string, style: string) {
    // console.log(id, name, style);
    const bandRepository = getRepository(Band);
    const band = bandRepository.create({ name, style });
    await bandRepository.save(band);
    return band;
  }

  static update(id: number, name: string, style: string) {
    console.log(
      `Esse controller atualiza uma banda especificada pelo id ${id} nome da banda/cantor ${name} com o estilo ${style}`
    );
  }

  static async delete(id: number) {
    // console.log(`Esse controller deleta uma banda especificada pelo id ${id}`);
    const bandRepository = getRepository(Band);
    const bands = await bandRepository.softRemove({ id });
    console.log(bands);
    return bands;
  }

  static async findById(id: number) {
    // console.log( `Esse controller encontra uma banda especificada pelo id ${id}`);
    const bandRepository = getRepository(Band);
    const bands = await bandRepository.find({ id });
    console.log(bands);
    return bands;
  }

  // static async findByName(name: string) {
  //   const bandRepository = getRepository(Band);
  //   const bands = await bandRepository.findOne({ name });
  //   console.log(bands);
  //   return bands;
  // }
}

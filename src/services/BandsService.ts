import { getRepository } from "typeorm";
import { Band } from "../entities/Band";
import { Studio } from "../entities/studio";
import { MusiciansService } from "./MusicianService";

export class BandsService {
  static async findAll() {
    const bandRepository = getRepository(Band);
    const bands = await bandRepository.find();
    console.log(bands);
    return bands;
  }

  static async create(
    band_musician_Id: number,
    name: string,
    style: string,
    studioName: string
  ) {
    const musician = await MusiciansService.findById(band_musician_Id);
    if (!musician) {
      throw new Error("Esse band_musician_Id não existe!");
    }
    const studio: Studio = getRepository(Studio).create({ name: studioName });
    const bandRepository = getRepository(Band);
    const band = bandRepository.create({
      name,
      style,
      musician,
      studios: studio,
    });
    await bandRepository.save(band);
    return band;
  }

  static async update(id: number, name: string) {
    const bandRepository = getRepository(Band);
    const band = await bandRepository.findOne(id);
    const bandUpdated = bandRepository.merge(band, {
      name,
    });
    await bandRepository.save(bandUpdated);
    console.log(band, `alterado para ${bandUpdated.name}`);
    console.log(
      `Esse controller atualiza uma banda especificada pelo id ${id} nome da banda/cantor ${name}`
    );
    return bandUpdated;
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

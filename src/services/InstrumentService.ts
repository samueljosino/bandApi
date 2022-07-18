import { getRepository } from "typeorm";
import { Instrument } from "../entities/Instrument";
import { MusiciansService } from "./MusicianService";

export class InstrumentsService {
  static async findAll() {
    const instrumentRepository = getRepository(Instrument);
    const instruments = await instrumentRepository.find();
    console.log(instruments);
    return instruments;
  }

  static async create(musicianId: number, name: string, type: string) {
    // MusiciansService.find(id);
    const musician = await MusiciansService.findById(musicianId);
    if (!musician) {
      throw new Error("Esse musician_ID não existe!");
    }
    const instrumentRepository = getRepository(Instrument);
    const instrument = instrumentRepository.create({
      name,
      type,
      musician,
    });
    await instrumentRepository.save(instrument);
    return instrument;
  }

  static async update(id: number, name: string) {
    const instrumentRepository = getRepository(Instrument);
    const instrument = await instrumentRepository.findOne(id);
    const instrumentUpdated = instrumentRepository.merge(instrument, {
      name,
    });
    await instrumentRepository.save(instrumentUpdated);
    console.log(instrument, `alterado para ${instrumentUpdated.name}`);
    return instrumentUpdated;
  }

  static async delete(id: number) {
    const instrumentRepository = getRepository(Instrument);
    const instruments = await instrumentRepository.softRemove({ id });
    console.log(instruments);
    return instruments;
  }

  static async findById(id: number) {
    const instrumentRepository = getRepository(Instrument);
    const instruments = await instrumentRepository.find({ id });
    console.log(instruments);
    return instruments;
  }

  // static async findByName(name: string) {
  //   const instrumentRepository = getRepository(Instrument);
  //   const instruments = await instrumentRepository.findOne({ name });
  //   console.log(instruments);
  //   return instruments;
  // }

  static async manyToOne(musician_id: Number, name: string, type: string) {
    if (!InstrumentsService.findById) {
      console.error(
        "Musician ID não foi encontrado!! Tente novamente com um ID existente!"
      );
    }
    const instrumentRepository = getRepository(Instrument);
    // const instruments = instrumentRepository.create(musician_id);
    // console.log(instruments);
    // return instruments;
  }
}

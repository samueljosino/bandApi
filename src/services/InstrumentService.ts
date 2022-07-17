import { getRepository } from "typeorm";
import { Instrument } from "../entities/Instrument";

export class InstrumentService {
  static async findAll() {
    const instrumentRepository = getRepository(Instrument);
    const instruments = await instrumentRepository.find();
    console.log(instruments);
    return instruments;
  }

  static async create(name: string, style: string) {
    const instrumentRepository = getRepository(Instrument);
    const instrument = instrumentRepository.create({ name, style });
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
}

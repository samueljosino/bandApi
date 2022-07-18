import { getRepository } from "typeorm";
import { Musician } from "../entities/Musician";

export class MusiciansService {
  static async findAll() {
    const musicianRepository = getRepository(Musician);
    const musicians = await musicianRepository.find();
    console.log(musicians);
    return musicians;
  }

  static async create(name: string, style: string) {
    const musicianRepository = getRepository(Musician);
    const musician = musicianRepository.create({ name, style });
    await musicianRepository.save(musician);
    return musician;
  }

  static async update(id: number, name: string) {
    const musicianRepository = getRepository(Musician);
    const musician = await musicianRepository.findOne(id);
    const musicianUpdated = musicianRepository.merge(musician, {
      name,
    });
    await musicianRepository.save(musicianUpdated);
    console.log(musician, `alterado para ${musicianUpdated.name}`);
    return musicianUpdated;
  }

  static async delete(id: number) {
    const musicianRepository = getRepository(Musician);
    const musicians = await musicianRepository.softRemove({ id });
    console.log(musicians);
    return musicians;
  }

  static async findById(id: number) {
    const musicianRepository = getRepository(Musician);
    const musician = await musicianRepository.findOne({
      where: { id },
    });
    return musician;
  }

  // static async findByName(name: string) {
  //   const musicianRepository = getRepository(Musician);
  //   const musicians = await musicianRepository.findOne({ name });
  //   console.log(musicians);
  //   return musicians;
  // }

  // static async manyToOne(musician_id: number, name: string, style: string) {
  //   if (!MusiciansService.findById) {
  //     console.error(
  //       "Musician ID não foi encontrado!! Tente novamente com um ID existente!"
  //     );
  //   }
  //   const musicianRepository = getRepository(Musician);
  //   const musicians = musicianRepository.create(musician_id);
  //   console.log(musicians);
  //   return musicians;
  // }
}

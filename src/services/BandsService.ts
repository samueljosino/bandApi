export class BandsService {
  static findAll() {
    console.log("aqui vai retornar todos as bandas");
    return "retorno do findAll";
  }

  static create(id: number, name: string, style: string) {
    console.log(id, name, style);
  }
}

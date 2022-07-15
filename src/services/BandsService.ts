export class BandsService {
  static findAll() {
    console.log("aqui vai retornar todos as bandas");
    return "retorno do findAll";
  }

  static create(id: number, name: string, style: string) {
    console.log(id, name, style);
    return `${id} ${name} ${style}`;
  }

  // ? conferir quais desses parametros realmente são necessarios, talvez pra fazer update precise apenas do id
  static update(id: number, name: string, style: string) {
    console.log(
      `Esse controller atualiza uma banda especificada pelo id ${id} nome da banda/cantor ${name} com o estilo ${style}`
    );
  }

  static delete(id: number, name: string, style: string) {
    console.log(`Esse controller deleta uma banda especificada pelo id ${id}`);
  }

  static findById(id: number, name: string, style: string) {
    console.log(
      `Esse controller encontra uma banda especificada pelo id ${id}`
    );
  }
}

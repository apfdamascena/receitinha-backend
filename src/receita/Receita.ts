export class Receita {
  titulo: string;
  ingredientes: string;
  passos: string;

  constructor(props: Receita) {
    Object.assign(this, props);
  }
}

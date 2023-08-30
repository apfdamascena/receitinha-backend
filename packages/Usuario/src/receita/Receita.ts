export class Receita {
  id?: string;
  titulo: string;
  ingredientes: string;
  passos: string;

  constructor(props: Receita) {
    Object.assign(this, props);
  }
}

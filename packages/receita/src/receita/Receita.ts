export class Receita {
  id?: string;
  titulo: string;
  duracao: string;
  descricao: string;
  dificuldade: string;
  ingredientes: [string];
  passos: string;
  imagem: string;

  constructor(props: Receita) {
    Object.assign(this, props);
  }
}

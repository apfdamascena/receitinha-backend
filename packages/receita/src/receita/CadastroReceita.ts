import { ICadastroReceitaResponse } from "./CadastroReceitaDTO";
import { IRepositorioReceita } from "./IRepositorioReceita";
import { Receita } from "./Receita";

export class CadastroReceita {
  constructor(private repositorioReceita: IRepositorioReceita) {}

  async cadastrarReceita(input: Receita): Promise<ICadastroReceitaResponse> {
    const {
      titulo,
      descricao,
      dificuldade,
      duracao,
      passos,
      imagem,
      ingredientes,
    } = input;

    const novaReceita = new Receita({
      titulo,
      descricao,
      dificuldade,
      duracao,
      passos,
      imagem,
      ingredientes,
    });

    const receita = await this.repositorioReceita.save(novaReceita);
    return { receita };
  }

  async readReceita(id: string): Promise<ICadastroReceitaResponse> {
    const receita = await this.repositorioReceita.findReceitaBy(id);
    return { receita };
  }

  async getAllReceitas(): Promise<ICadastroReceitaResponse> {
    const receitas = await this.repositorioReceita.findAllReceitas();
    return { receitas };
  }
}

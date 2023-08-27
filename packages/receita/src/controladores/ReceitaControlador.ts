import { CadastroReceita } from "src/receita/CadastroReceita";
import { ICadastroReceitaResponse } from "src/receita/CadastroReceitaDTO";

import { Receita } from "../receita/Receita";

export class ReceitaControlador {
  constructor(private cadastroReceita: CadastroReceita) {}

  async createReceita(receita: Receita): Promise<ICadastroReceitaResponse> {
    return await this.cadastroReceita.cadastrarReceita(receita);
  }

  async readReceita(id: string): Promise<ICadastroReceitaResponse> {
    return await this.cadastroReceita.readReceita(id);
  }

  async getAllReceitas(): Promise<ICadastroReceitaResponse> {
    return await this.cadastroReceita.getAllReceitas();
  }

  async deleteReceita(id: string): Promise<ICadastroReceitaResponse> {
    return await this.cadastroReceita.deleteReceita(id);
  }
}

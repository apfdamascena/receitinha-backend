import { ReceitaControlador } from "./controladores/ReceitaControlador";
import { ICadastroReceitaResponse } from "./receita/CadastroReceitaDTO";
import { Receita } from "./receita/Receita";

export class Fachada {
  constructor(private receitaControlador: ReceitaControlador) {}
  async cadastrarReceita(receita: Receita): Promise<ICadastroReceitaResponse> {
    return await this.receitaControlador.createReceita(receita);
  }

  async getReceita(id: string): Promise<ICadastroReceitaResponse> {
    return await this.receitaControlador.readReceita(id);
  }

  async getAllReceitas(): Promise<ICadastroReceitaResponse> {
    return await this.receitaControlador.getAllReceitas();
  }

  async deleteReceita(id: string): Promise<ICadastroReceitaResponse> {
    return await this.receitaControlador.deleteReceita(id);
  }
}

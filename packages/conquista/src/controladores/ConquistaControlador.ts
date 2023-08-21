import { CadastroConquista } from "src/conquista/CadastroConquista";
import { ICadastroConquistaResponse } from "src/conquista/CadastroConquistaDTO";
import { Conquista } from "src/conquista/Conquista";

// import { Conquista } from "../conquista/Conquista";

export class ConquistaControlador {
  constructor(private cadastroConquista: CadastroConquista) {}

  async getConquistaId(receitaId: string): Promise<ICadastroConquistaResponse> {
    return await this.cadastroConquista.desbloquearConquista(receitaId);
  }
  async createConquista(
    conquista: Conquista
  ): Promise<ICadastroConquistaResponse> {
    return await this.cadastroConquista.cadastrarConquista(conquista);
  }
}

import { ICadastroConquistaResponse } from "./conquista/CadastroConquistaDTO";
import { Conquista } from "./conquista/Conquista";
import { ConquistaControlador } from "./controladores/ConquistaControlador";

export class Fachada {
  constructor(private conquistasControlador: ConquistaControlador) {}
  async desbloquearConquista(
    receitaId: string,
    usuarioId: string
  ): Promise<ICadastroConquistaResponse> {
    return await this.conquistasControlador.desbloqueiaConquista(
      receitaId,
      usuarioId
    );
  }

  async cadastrarConquista(
    conquista: Conquista
  ): Promise<ICadastroConquistaResponse> {
    return await this.conquistasControlador.createConquista(conquista);
  }

  async getConquista(id: string): Promise<ICadastroConquistaResponse> {
    return await this.conquistasControlador.getConquista(id);
  }
}

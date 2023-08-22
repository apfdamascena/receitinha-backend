import { ICadastroConquistaResponse } from "./conquista/CadastroConquistaDTO";
import { Conquista } from "./conquista/Conquista";
import { ConquistaControlador } from "./controladores/ConquistaControlador";

export class Fachada {
  constructor(private conquistasControlador: ConquistaControlador) {}
  async desbloquearConquista(
    receitaId: string,
    usuarioId: string
  ): Promise<ICadastroConquistaResponse> {
    //colocar a chamada para outro local aqui
    return await this.conquistasControlador.getConquistaId(receitaId);
  }

  async cadastrarConquista(
    conquista: Conquista
  ): Promise<ICadastroConquistaResponse> {
    console.log("oi");

    return await this.conquistasControlador.createConquista(conquista);
  }
}

import { CadastroConquista } from "src/conquista/CadastroConquista";
import { ICadastroConquistaResponse } from "src/conquista/CadastroConquistaDTO";
import { Conquista } from "src/conquista/Conquista";
import { IMessagingAdapter } from "src/infra/kafka-message-adapter";

export class ConquistaControlador {
  constructor(
    private cadastroConquista: CadastroConquista,
    private kafka: IMessagingAdapter
  ) {}

  async desbloqueiaConquista(
    receitaId: string,
    userId: string
  ): Promise<ICadastroConquistaResponse> {
    const conquistas = await this.cadastroConquista.desbloquearConquista(
      receitaId
    );

    const { conquistaId } = conquistas;

    console.log(`conquista id: ${conquistaId}`);

    this.kafka.sendMessage("conquistas.desbloqueia-conquistas", {
      conquistaId,
      userId,
    });

    return conquistas;
  }
  async createConquista(
    conquista: Conquista
  ): Promise<ICadastroConquistaResponse> {
    return await this.cadastroConquista.cadastrarConquista(conquista);
  }

  async getConquista(id: string): Promise<ICadastroConquistaResponse> {
    const conquista = await this.cadastroConquista.getConquista(id);
    return conquista;
  }
}

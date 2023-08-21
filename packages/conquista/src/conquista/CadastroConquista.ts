import { ICadastroConquistaResponse } from "./CadastroConquistaDTO";
import { Conquista } from "./Conquista";
import { IRepositorioConquista } from "./IRepositorioConquista";

export class CadastroConquista {
  constructor(private repositorioConquista: IRepositorioConquista) {}

  async desbloquearConquista(
    receitaId: string
  ): Promise<ICadastroConquistaResponse> {
    const conquista = await this.repositorioConquista.findConquistaBy(
      receitaId
    );
    const conquistaId = conquista.id;

    return { conquistaId };
  }

  async cadastrarConquista(
    input: Conquista
  ): Promise<ICadastroConquistaResponse> {
    const { titulo, imagemBloqueada, imagemDesbloqueada, receitaId } = input;

    const novaConquista = new Conquista({
      titulo,
      imagemBloqueada,
      imagemDesbloqueada,
      receitaId,
    });

    const conquista = await this.repositorioConquista.save(novaConquista);
    return { conquista };
  }
}

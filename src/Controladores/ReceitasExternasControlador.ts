import {
  IReceitasExternasRequest,
  IReceitasExternasResponse,
  ReceitasExternasAdapter,
} from "@receitasExternas";
import { ISubsistemaReceitasExternas } from "src/receitasExternas/ISubsistemaReceitasExternas";

export class ReceitasExternasControlador {
  constructor(private receitasExternas: ISubsistemaReceitasExternas) {}

  async getReceitasByName(
    input: IReceitasExternasRequest
  ): Promise<IReceitasExternasResponse> {
    const { nome } = input;

    const data = await this.receitasExternas.findReceitaByName(nome);
    const receitasExternasAdapter = new ReceitasExternasAdapter();

    const receitas = data.map((receita) =>
      receitasExternasAdapter.convert(receita)
    );

    return { receitas };
  }
}

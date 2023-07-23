import { api } from "@service";

import { ISubsistemaReceitasExternas } from "./ISubsistemaReceitasExternas";
import { ReceitaExterna } from "./ReceitasExternas";

export class SubsistemaReceitasExternas implements ISubsistemaReceitasExternas {
  async findReceitaByName(name: string): Promise<ReceitaExterna[]> {
    try {
      const request = await api.get(`/recipe?query=${name}`);
      const receitas: ReceitaExterna[] = request.data;
      return receitas;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

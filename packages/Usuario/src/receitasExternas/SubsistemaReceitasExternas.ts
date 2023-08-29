import { api } from "@service";
import { v4 as uuid } from "uuid";

import { ISubsistemaReceitasExternas } from "./ISubsistemaReceitasExternas";
import { ReceitaExterna } from "./ReceitasExternas";

export class SubsistemaReceitasExternas implements ISubsistemaReceitasExternas {
  async findReceitaByName(name: string): Promise<ReceitaExterna[]> {
    try {
      const request = await api.get(`/recipe?query=${name}`);
      const receitasWithoutId: ReceitaExterna[] = request.data;
      const receitas: ReceitaExterna[] = receitasWithoutId.map((receitas) => {
        receitas.id = uuid();
        return receitas;
      });

      return receitas;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

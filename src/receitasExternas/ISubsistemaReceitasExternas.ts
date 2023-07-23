import { ReceitaExterna } from "./ReceitasExternas";

export interface ISubsistemaReceitasExternas {
  findReceitaByName(name: string): Promise<Array<ReceitaExterna>>;
}

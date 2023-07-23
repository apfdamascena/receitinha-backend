import { ReceitaExterna } from "./ReceitasExternas";

export interface ISubsistemaReceitasExternas {
  findReceitaByName(name: string): Array<ReceitaExterna>;
}

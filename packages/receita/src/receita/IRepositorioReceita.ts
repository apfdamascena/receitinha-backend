import { Receita } from "./Receita";

export interface IRepositorioReceita {
  findReceitaBy(id: string): Promise<Receita>;
  save(receita: Receita): Promise<Receita>;
  findAllReceitas(): Promise<[Receita]>;
  deleteReceitaBy(id: string): Promise<Receita>;
}

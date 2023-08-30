import { Conquista } from "./Conquista";

export interface IRepositorioConquista {
  findConquistaBy(receitaId: string): Promise<Conquista>;
  save(usuario: Conquista): Promise<Conquista>;
  findConquista(id: string): Promise<Conquista>;
}

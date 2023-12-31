import { ProducerEvents } from "kafkajs";

import { Usuario } from "./Usuario";

export interface IRepositorioUsuario {
  findByEmail(email: string): Promise<Usuario>;
  save(usuario: Usuario): Promise<Usuario>;
  findUserById(userId: string): Promise<Usuario>;
  getConquistas(userId: string): Promise<Array<string>>;
  deleteUser(userId: string): Promise<void>;
  updateUser(userId: string, nome: string): Promise<Usuario>;
  adicionaConquistaAUsuario(userId: string, conquistaId: string): Promise<void>;
}

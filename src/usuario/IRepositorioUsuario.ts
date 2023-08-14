import { Usuario } from "./Usuario";

export interface IRepositorioUsuario {
  findByEmail(email: string): Promise<Usuario | null>;
  save(usuario: Usuario): Promise<Usuario | null>;
  findUserById(userId: string): Promise<Usuario | null>;
  getConquistas(userId: string): Promise<Array<string>>;
  deleteUser(userId: string): Promise<Usuario | null>;
  updateUser(userId: string, nome: string): Promise<Usuario | null>;
}

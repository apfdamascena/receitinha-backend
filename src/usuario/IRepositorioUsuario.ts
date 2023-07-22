import { Usuario } from "./Usuario";


export interface IRepositorioUsuario {
    findByEmail(email: string): Promise<Usuario>;
    save(usuario: Usuario): Promise<void>;
    findUserById(userId: string): Promise<Usuario>;
    getConquistas(userId: string): Promise<Array<string>>

}
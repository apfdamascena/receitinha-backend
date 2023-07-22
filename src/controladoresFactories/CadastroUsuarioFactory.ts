import { CadastroUsuario, RepositorioUsuario } from "@usuario";
import { CadastrarUsuarioControlador } from "src/controladores/CadastrarUsuarioControlador";
import { database } from "@database";


export class CadastroUsuarioFactory {

    static create(): CadastrarUsuarioControlador {
        
        const usuarioRepository = new RepositorioUsuario(database)
        const cadastroUsuario = new CadastroUsuario(usuarioRepository)
        const controlador = new CadastrarUsuarioControlador(cadastroUsuario)
        return controlador
    }
}
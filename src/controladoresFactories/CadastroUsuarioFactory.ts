import DatabaseSingleton from "@database";
import { CadastroUsuario, RepositorioUsuario } from "@usuario";
import { CadastrarUsuarioControlador } from "src/controladores/CadastrarUsuarioControlador";

export class CadastroUsuarioFactory {
  static create(): CadastrarUsuarioControlador {
    const usuarioRepository = new RepositorioUsuario(
      DatabaseSingleton.getInstance().getDatabase()
    );
    const cadastroUsuario = new CadastroUsuario(usuarioRepository);
    const controlador = new CadastrarUsuarioControlador(cadastroUsuario);
    return controlador;
  }
}

import { AutenticarUsuarioControlador } from "@controladores";
import DatabaseSingleton from "@database";
import { CadastroUsuario, RepositorioUsuario } from "@usuario";

export class AutenticaUsuarioFactory {
  static create(): AutenticarUsuarioControlador {
    const usuarioRepository = new RepositorioUsuario(
      DatabaseSingleton.getInstance().getDatabase()
    );
    const cadastroUsuario = new CadastroUsuario(usuarioRepository);
    const controlador = new AutenticarUsuarioControlador(cadastroUsuario);
    return controlador;
  }
}

import { AutenticarUsuarioControlador } from "@controladores";
import DatabaseSingleton from "@database";
import { TokenProvider } from "@providers";
import { CadastroUsuario, RepositorioUsuario } from "@usuario";

export class AutenticaUsuarioFactory {
  static create(): AutenticarUsuarioControlador {
    const usuarioRepository = new RepositorioUsuario(
      DatabaseSingleton.getInstance().getDatabase()
    );
    const tokenProvider = new TokenProvider();
    const cadastroUsuario = new CadastroUsuario(
      usuarioRepository,
      tokenProvider
    );
    const controlador = new AutenticarUsuarioControlador(cadastroUsuario);
    return controlador;
  }
}

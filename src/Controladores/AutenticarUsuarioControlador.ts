import { CadastroUsuario, Usuario } from "@usuario";
import { ILoginResponse } from "src/login/ILoginRequestDTO";

export class AutenticarUsuarioControlador {
  constructor(private cadastroUsuario: CadastroUsuario) {}

  async autentica(usuario: Usuario): Promise<ILoginResponse> {
    return { token: "dadasdasdasdasdkasdklaj" };
  }
}

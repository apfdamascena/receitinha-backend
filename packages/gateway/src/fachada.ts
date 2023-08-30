import { AutenticarUsuarioControlador } from "@controladores";

import { ILoginResponse } from "./login/ILoginRequestDTO";

import { ICadastroUsuarioResponse } from "./usuario/CadastroUsuarioDTO";
import { Usuario } from "./usuario/Usuario";

export class Fachada {
  constructor(
    private autenticarUsuarioControlador: AutenticarUsuarioControlador
  ) {}

  async authenticate(usuario: Usuario): Promise<ILoginResponse> {
    return await this.autenticarUsuarioControlador.autentica(usuario);
  }
}

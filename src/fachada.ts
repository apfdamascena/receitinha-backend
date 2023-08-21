import {
  CadastrarUsuarioControlador,
  ReceitasExternasControlador,
  AutenticarUsuarioControlador,
} from "@controladores";

import { ILoginResponse } from "./login/ILoginRequestDTO";
import { IReceitasExternasResponse } from "./receitasExternas/ReceitasExternasDTO";
import { ICadastroUsuarioResponse } from "./usuario/CadastroUsuarioDTO";
import { Usuario } from "./usuario/Usuario";

export class Fachada {
  constructor(
    private cadastrarUsuarioControlador: CadastrarUsuarioControlador,
    private subsitemaReceitasExternas: ReceitasExternasControlador,
    private autenticarUsuarioControlador: AutenticarUsuarioControlador
  ) {}

  async cadastrarUsuario(usuario: Usuario): Promise<ICadastroUsuarioResponse> {
    return await this.cadastrarUsuarioControlador.cadastrarUsuario(usuario);
  }
  async readUsuario(usuarioId: string): Promise<ICadastroUsuarioResponse> {
    return await this.cadastrarUsuarioControlador.readUsuario(usuarioId);
  }

  async deleteUsuario(usuarioId: string): Promise<void> {
    await this.cadastrarUsuarioControlador.deleteUsuario(usuarioId);
  }

  async updateUsuario(usuario: Usuario): Promise<ICadastroUsuarioResponse> {
    return await this.cadastrarUsuarioControlador.updateUsuario(usuario);
  }

  async getReceitasExternas(nome: string): Promise<IReceitasExternasResponse> {
    return await this.subsitemaReceitasExternas.getReceitasByName(nome);
  }

  async authenticate(usuario: Usuario): Promise<ILoginResponse> {
    return await this.autenticarUsuarioControlador.autentica(usuario);
  }
}

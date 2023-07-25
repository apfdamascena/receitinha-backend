import {
  CadastrarUsuarioControlador,
  ReceitasExternasControlador,
} from "@controladores";
import { NextFunction, Request, Response } from "express";

import { IReceitasExternasResponse } from "./receitasExternas/ReceitasExternasDTO";
import { ICadastroUsuarioResponse } from "./usuario/CadastroUsuarioDTO";
import { Usuario } from "./usuario/Usuario";

export class Fachada {
  constructor(
    private cadastrarUsuarioControlador: CadastrarUsuarioControlador,
    private subsitemaReceitasExternas: ReceitasExternasControlador
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
}

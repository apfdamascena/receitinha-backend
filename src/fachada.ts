import {
  CadastrarUsuarioControlador,
  ReceitasExternasControlador,
} from "@controladores";
import { NextFunction, Request, Response } from "express";

import { ICadastroUsuarioResponse } from "./usuario/CadastroUsuarioDTO";
import { Usuario } from "./usuario/Usuario";

export class Fachada {
  constructor(
    private cadastrarUsuarioControlador: CadastrarUsuarioControlador,
    private subsitemaReceitasExternas: ReceitasExternasControlador
  ) {}

  async cadastrarUsuario(usuario: Usuario): Promise<ICadastroUsuarioResponse> {
    return this.cadastrarUsuarioControlador.cadastrarUsuario(usuario);
  }

  async readUsuario(usuarioId: string): Promise<ICadastroUsuarioResponse> {
    return this.cadastrarUsuarioControlador.readUsuario(usuarioId);
  }

  async deleteUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.cadastrarUsuarioControlador.deleteUsuario(request, response, next);
  }

  async updateUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.cadastrarUsuarioControlador.updateUsuario(request, response, next);
  }

  async getReceitasExternas(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.subsitemaReceitasExternas.getReceitasByName(request, response, next);
  }
}

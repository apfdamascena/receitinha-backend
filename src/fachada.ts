import {
  CadastrarUsuarioControlador,
  ReceitasExternasControlador,
} from "@controladores";
import { NextFunction, Request, Response } from "express";

export class Fachada {
  constructor(
    private cadastrarUsuarioControlador: CadastrarUsuarioControlador,
    private subsitemaReceitasExternas: ReceitasExternasControlador
  ) {}

  async cadastrarUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.cadastrarUsuarioControlador.cadastrarUsuario(request, response, next);
  }

  async readUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.cadastrarUsuarioControlador.readUsuario(request, response, next);
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

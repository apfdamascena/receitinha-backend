import { NextFunction, Request, Response } from "express";

import { CadastroUsuarioFactory } from "./controladoresFactories/CadastroUsuarioFactory";
import { ReceitasExternasFactory } from "./controladoresFactories/ReceitaExternaFactory";
import { Fachada } from "./fachada";

export class Routes {
  private fachada: Fachada;

  constructor() {
    const cadastroUsuarioControlador = CadastroUsuarioFactory.create();
    const subsitemaReceitasExternas = ReceitasExternasFactory.create();
    this.fachada = new Fachada(
      cadastroUsuarioControlador,
      subsitemaReceitasExternas
    );
  }

  async cadastrarUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.fachada.cadastrarUsuario(request, response, next);
  }

  async readUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.fachada.readUsuario(request, response, next);
  }

  async deleteUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.fachada.deleteUsuario(request, response, next);
  }

  async updateUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.fachada.updateUsuario(request, response, next);
  }

  async getReceitasExternas(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.fachada.getReceitasExternas(request, response, next);
  }
}

import { HttpStatus } from "@http";
import { CadastroUsuario, ICadastroUsuarioRequest } from "@usuario";
import { NextFunction, Request, Response } from "express";
import { HttpException } from "src/middleware/errorHandler";
import { parseType } from "src/parseType";

export class CadastrarUsuarioControlador {
  constructor(private cadastroUsuario: CadastroUsuario) {}

  async cadastrarUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const body = parseType<ICadastroUsuarioRequest>(request.body);

      const { usuario } = await this.cadastroUsuario.cadastrarUsuario(body);

      response.locals = {
        ...response.locals,
        data: usuario,
      };

      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
    }
  }

  async readUsuario(request: Request, response: Response, next: NextFunction) {
    try {
      const params = parseType<ICadastroUsuarioRequest>(request.params);

      const { usuario } = await this.cadastroUsuario.readUsuario(params);

      response.locals = {
        ...response.locals,
        data: usuario,
      };

      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
    }
  }

  async deleteUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const params = parseType<ICadastroUsuarioRequest>(request.params);

      const { usuario } = await this.cadastroUsuario.deleteUsuario(params);

      response.locals = {
        ...response.locals,
        data: usuario,
      };

      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
    }
  }

  async updateUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const body = parseType<ICadastroUsuarioRequest>(request.body);

      const { usuario } = await this.cadastroUsuario.updateUsuario(body);

      response.locals = {
        ...response.locals,
        data: usuario,
      };

      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
    }
  }
}

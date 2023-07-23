import { HttpStatus } from "@http";
import {
  IReceitasExternasRequest,
  ReceitasExternasAdapter,
} from "@receitasExternas";
import { NextFunction, Request, Response } from "express";
import { parseType } from "src/parseType";
import { ISubsistemaReceitasExternas } from "src/receitasExternas/ISubsistemaReceitasExternas";

export class ReceitasExternasControlador {
  constructor(private receitasExternas: ISubsistemaReceitasExternas) {}

  async getReceitasByName(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const body = parseType<IReceitasExternasRequest>(request.body);

      const { nome } = body;

      const data = await this.receitasExternas.findReceitaByName(nome);
      const receitasExternasAdapter = new ReceitasExternasAdapter();

      const receitas = data.map((receita) =>
        receitasExternasAdapter.convert(receita)
      );

      response.locals = {
        ...response.locals,
        data: receitas,
      };

      next();
    } catch (error) {
      console.log(error);
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
    }
  }
}

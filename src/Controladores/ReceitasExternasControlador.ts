import { HttpStatus } from "@http";
import {
  IReceitasExternasRequest,
  IReceitasExternasResponse,
  ReceitasExternasAdapterAttributes,
} from "@receitasExternas";
import { NextFunction, Request, Response } from "express";
import { parseType } from "src/parseType";
import { ISubsistemaReceitasExternas } from "src/receitasExternas/ISubsistemaReceitasExternas";

export class ReceitasExternasControlador {
  constructor(private receitasExternas: ISubsistemaReceitasExternas) {}

  async getReceitasByName(nome: string): Promise<IReceitasExternasResponse> {
    const data = await this.receitasExternas.findReceitaByName(nome);
    const receitasExternasAdapter = new ReceitasExternasAdapterAttributes();

    const receitas = data.map((receita) =>
      receitasExternasAdapter.convert(receita)
    );

    return { receitas };
  }
}

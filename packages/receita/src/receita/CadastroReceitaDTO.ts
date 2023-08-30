import Joi from "joi";

import { Receita } from "./Receita";

export interface ICadastroReceitaRequest {
  titulo: string;
  duracao: string;
  descricao: string;
  dificuldade: string;
  ingredientes: [string];
  passos: string;
  imagem: string;
  id: string;
}

export interface ICadastroReceitaResponse {
  receita?: Receita;
  receitas?: [Receita];
}

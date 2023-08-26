import Joi from "joi";

import { Receita } from "./Receita";

export interface ICadastroReceitaRequest {
  titulo: string;
  duracao: string;
  descricao: string;
  dificuldade: string;
  ingredientes: [string];
  passos: string;
  conquistaId?: string;
  imagem: string;
  id: string;
}

export interface ICadastroReceitaResponse {
  receita?: Receita;
  receitas?: [Receita];
}

// export const ConquistaSchema = Joi.object({
//   titulo: Joi.string(),
//   imagemDesbloqueada: Joi.string(),
//   imagemBloqueada: Joi.string(),
// });

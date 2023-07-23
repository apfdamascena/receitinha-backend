import { Receita } from "src/receita/Receita";

export interface IReceitasExternasRequest {
  nome: string;
}

export interface IReceitasExternasResponse {
  receitas: Array<Receita>;
}

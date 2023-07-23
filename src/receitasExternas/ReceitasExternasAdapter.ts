import { Receita } from "src/receita/Receita";

import { ReceitaExterna } from "./ReceitasExternas";

export class ReceitasExternasAdapter {
  convert({ title, ingredients, instructions }: ReceitaExterna): Receita {
    return new Receita({
      titulo: title,
      ingredientes: ingredients,
      passos: instructions,
    });
  }
}

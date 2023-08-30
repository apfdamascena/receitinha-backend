import { Receita } from "src/receita/Receita";

import { ReceitaExterna } from "./ReceitasExternas";

export class ReceitasExternasAdapterAttributes {
  convert({ title, ingredients, instructions, id }: ReceitaExterna): Receita {
    return new Receita({
      id,
      titulo: title,
      ingredientes: ingredients,
      passos: instructions,
    });
  }
}

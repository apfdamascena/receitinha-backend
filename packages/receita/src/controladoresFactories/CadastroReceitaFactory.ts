import { ReceitaControlador } from "@controladores";
import DatabaseSingleton from "@database";
import { CadastroReceita } from "src/receita/CadastroReceita";
import { RepositorioReceita } from "src/receita/RepositorioReceita";

export class CadastroReceitaFactory {
  static create(): ReceitaControlador {
    const receitaRepository = new RepositorioReceita(
      DatabaseSingleton.getInstance().getDatabase()
    );
    const cadastroReceita = new CadastroReceita(receitaRepository);
    const controlador = new ReceitaControlador(cadastroReceita);
    return controlador;
  }
}

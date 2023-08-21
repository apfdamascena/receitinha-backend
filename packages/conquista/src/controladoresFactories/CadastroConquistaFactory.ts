import { ConquistaControlador } from "@controladores";
import DatabaseSingleton from "@database";
import { CadastroConquista } from "src/conquista/CadastroConquista";
import { RepositorioConquista } from "src/conquista/RepositorioConquista";

export class CadastroConquistaFactory {
  static create(): ConquistaControlador {
    const consquistaRepository = new RepositorioConquista(
      DatabaseSingleton.getInstance().getDatabase()
    );
    const cadastroConquista = new CadastroConquista(consquistaRepository);
    const controlador = new ConquistaControlador(cadastroConquista);
    return controlador;
  }
}

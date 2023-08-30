import { ConquistaControlador } from "@controladores";
import DatabaseSingleton from "@database";
import { CadastroConquista } from "src/conquista/CadastroConquista";
import { RepositorioConquista } from "src/conquista/RepositorioConquista";
import { KafkaMessagingAdapter } from "src/infra/kafka-message-adapter";

export class CadastroConquistaFactory {
  static create(): ConquistaControlador {
    const consquistaRepository = new RepositorioConquista(
      DatabaseSingleton.getInstance().getDatabase()
    );
    const cadastroConquista = new CadastroConquista(consquistaRepository);
    const controlador = new ConquistaControlador(
      cadastroConquista,
      new KafkaMessagingAdapter()
    );
    return controlador;
  }
}

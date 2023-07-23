import DatabaseSingleton from "@database";
import { SubsistemaReceitasExternas } from "@receitasExternas";
import { ReceitasExternasControlador } from "src/controladores/ReceitasExternasControlador";

export class ReceitasExternasFactory {
  static create(): ReceitasExternasControlador {
    const subsistema = new SubsistemaReceitasExternas();
    const controlador = new ReceitasExternasControlador(subsistema);
    return controlador;
  }
}

import { CadastroUsuarioFactory } from "@controlerFactories";

import { kafka } from "./kafka";

interface IDesbloqueiaReceita {
  conquistaId: string;
  usuarioId: string;
}

async function main() {
  const consumer = kafka.consumer({
    groupId: "estoque-group",
    allowAutoTopicCreation: true,
  });

  await consumer.connect();
  await consumer.subscribe({ topic: "conquistas.desbloqueia-conquistas" });

  await consumer.run({
    eachMessage: async ({ message }) => {
      if (!message.value) return;

      const messageToJson = message.value.toString();

      if (!messageToJson) return;

      const desbloqueia: IDesbloqueiaReceita = JSON.parse(messageToJson);
      const controller = CadastroUsuarioFactory.create();
      controller.adicionaConquistaAoUsuario(
        desbloqueia.conquistaId,
        desbloqueia.usuarioId
      );
    },
  });
}

main()
  .then(() => {
    console.log("[usuario] listening to kafka messages");
  })
  .catch(() => {
    console.log("erro");
  });

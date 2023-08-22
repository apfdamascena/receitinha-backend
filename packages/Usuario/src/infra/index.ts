import { kafka } from "./kafka";

// interface ProdutoNewProduto {
//   produto: {
//     id: string;
//     title: string;
//   };

//   fornecedor: {
//     id: string;
//     nome: string;
//   };
// }

async function main() {
  const consumer = kafka.consumer({
    groupId: "estoque-group",
    allowAutoTopicCreation: true,
  });

  await consumer.connect();
  await consumer.subscribe({ topic: "conquistas.desbloquer-conquista" });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(message);
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

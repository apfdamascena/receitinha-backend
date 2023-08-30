import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "Conquistas",
  brokers: ["127.0.0.1:9092"],
});

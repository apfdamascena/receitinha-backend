import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "Usuario",
  brokers: ["127.0.0.1:9092"],
});

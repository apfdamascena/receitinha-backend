import { producer } from "./Producer";

export interface IMessagingAdapter {
  sendMessage(topic: string, message: unknown): Promise<void>;
}

export class KafkaMessagingAdapter implements IMessagingAdapter {
  async sendMessage(topic: string, message: unknown): Promise<void> {
    await producer.send({
      topic,
      messages: [
        {
          value: JSON.stringify(message),
        },
      ],
    });
  }
}

import { kafka } from "./Kafka";
import { KafkaMessagingAdapter } from "./kafka-message-adapter";
import { producer } from "./Producer";

const kafkaMessaging = new KafkaMessagingAdapter();

export { kafka, kafkaMessaging, producer };

import { logger } from "@log";

import { kafka } from "./Kafka";

export const producer = kafka.producer({ allowAutoTopicCreation: true });

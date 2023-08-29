import { HttpStatus } from "@http";

export class NotAuthenticatedError extends Error {
  constructor() {
    super("Not authenticated")
  }
}
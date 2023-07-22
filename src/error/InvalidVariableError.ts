export default class InvalidVariablesError extends Error {
  constructor() {
    super("Invalid Environment Variables");
  }
}
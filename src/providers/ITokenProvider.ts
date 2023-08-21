export interface ITokenProvider {
  create(userId: string): string;
}

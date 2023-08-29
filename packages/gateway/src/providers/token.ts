export class Token {
  public readonly token: string;
  public expiresIn: number;

  constructor(props: Token) {
    Object.assign(this, props);
  }
}

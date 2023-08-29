export class Token {
  public readonly token: string;
  public expiresIn: number;

  constructor(props: Token) {
    this.token = props.token
    this.expiresIn = props.expiresIn
  }
}

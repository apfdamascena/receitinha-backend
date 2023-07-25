import { v4 as uuid } from "uuid";

export class Usuario {
  public readonly id: string;

  public nome: string;
  public senha?: string;
  public email: string;
  public conquistas?: Array<string>;

  public created_at?: Date;
  public updated_at?: Date;

  constructor(props: Omit<Usuario, "id">, id?: string) {
    Object.assign(this, props);
    this.id = id ? id : uuid();
  }
}

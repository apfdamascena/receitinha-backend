import { v4 as uuid } from "uuid";

export class Conquista {
  public readonly id: string;

  public titulo: string;
  public imagemDesbloqueada: string;
  public imagemBloqueada: string;
  public receitaId: string;

  public created_at?: Date;
  public updated_at?: Date;

  constructor(props: Omit<Conquista, "id">, id?: string) {
    Object.assign(this, props);
    this.id = id ? id : uuid();
  }
}

export class ReceitaExterna {
  id?: string;

  title: string;
  ingredients: string;
  servings: string;
  instructions: string;

  constructor(props: ReceitaExterna) {
    Object.assign(this, props);
  }
}

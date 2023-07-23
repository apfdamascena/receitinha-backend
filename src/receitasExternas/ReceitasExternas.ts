export class ReceitaExterna {
  title: string;
  ingredients: string;
  servings: string;
  instructions: string;

  constructor(props: ReceitaExterna) {
    Object.assign(this, props);
  }
}

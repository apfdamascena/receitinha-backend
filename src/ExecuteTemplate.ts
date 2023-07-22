export abstract class ExecuteTemplate<I, O> {
    public readonly identifier: string;
  
    constructor(identifier: string) {
      this.identifier = identifier;
    }
    abstract execute(input: I): Promise<O>;
  }
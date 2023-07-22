

import { IExecutor } from "./IExecutor";
import { ExecuteTemplate } from "./ExecuteTemplate";

export class ExecuteCase implements IExecutor {
  async execute<I, O>(useCase: ExecuteTemplate<I, O>, input: I): Promise<O> {
    return await useCase.execute(input);
  }
}
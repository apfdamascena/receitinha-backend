import { ExecuteTemplate } from "./ExecuteTemplate";

export interface IExecutor {
  execute<I, O>(useCase: ExecuteTemplate<I, O>, input: I): Promise<O>;
}
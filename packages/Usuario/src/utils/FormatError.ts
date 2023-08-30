import { ValidationErrorItem } from "joi";

export const formatErrors = (errors: ValidationErrorItem[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const constraints: any = {};
  errors.forEach(({ message, path }) => {
    constraints[path[0]] = message;
  });

  return constraints;
};

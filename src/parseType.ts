export const parseType = <T>(body: any): T => {
    const converted = {};
  
    const keys = Object.keys(body);
    keys.forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      converted[key] = body[key];
    });
  
    return converted as T;
  };
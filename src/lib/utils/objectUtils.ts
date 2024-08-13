export function omitProperties<T, K extends keyof T>(object: T, properties: K[]) {
  const result = { ...object };
  properties.forEach((property) => delete result[property]);
  return result;
}

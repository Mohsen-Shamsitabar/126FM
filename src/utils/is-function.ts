/**
 * Checks if the given value is a function.
 * @param value The value to check.
 * @returns True if the value is a function, otherwise false.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isFunction = <T extends Function>(value: unknown): value is T => {
  return typeof value === "function";
};

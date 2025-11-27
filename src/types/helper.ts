/**
 * A generic type for reducer actions that carry a payload.
 *
 * @template S - The state type.
 * @template A - The action type as a string.
 * @template K - The keys of the state to be included in the payload.
 */
export type ContextAction<S, K extends keyof S, A extends string> = {
  type: A;
  payload: Pick<S, K> | ((previous: S) => Pick<S, K>);
};

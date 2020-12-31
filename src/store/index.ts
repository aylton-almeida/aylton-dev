import { createContext } from "react";
import { AppBarContext } from "./AppBarContext";

export type ContextState<T> = [T, (value: T) => void];

export const RootContext = createContext({
  appBar: AppBarContext,
});

export const DefaultRootValue = {
  appBar: AppBarContext,
};

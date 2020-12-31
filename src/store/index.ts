import { createContext } from "react";
import { AppBarContext } from "./AppBarContext";
import { ThemeContext } from "./ThemeContext";

export type ContextState<T> = [T, (value: T) => void];

export const RootContext = createContext({
  appBar: AppBarContext,
  theme: ThemeContext,
});

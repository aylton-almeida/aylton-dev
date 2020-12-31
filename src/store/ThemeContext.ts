import { PaletteColorOptions, PaletteType } from "@material-ui/core";
import { ContextState } from ".";

export interface ThemeState {
  primary?: PaletteColorOptions;
  type?: PaletteType;
}

export const ThemeContext: ContextState<ThemeState> = [
  {} as ThemeState,
  (state: ThemeState) => {},
];

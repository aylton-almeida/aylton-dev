import { ContextState } from ".";

export interface AppBarState {
  color?: string;
  hidden: boolean;
  title?: string;
  icon?: JSX.Element;
}

export const AppBarContext: ContextState<AppBarState> = [
  {} as AppBarState,
  (state: AppBarState) => {},
];

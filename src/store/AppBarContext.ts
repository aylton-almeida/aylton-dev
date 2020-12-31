import { ContextState } from ".";

export interface AppBarState {
  color: string | null;
  hidden: boolean;
  title: string;
  icon: JSX.Element | null;
}

let state: AppBarState = {
  color: null,
  hidden: true,
  title: "",
  icon: null,
};

function setState(value: AppBarState) {
  state = {
    ...state,
    ...value,
  };
}

export const AppBarContext: ContextState<AppBarState> = [state, setState];

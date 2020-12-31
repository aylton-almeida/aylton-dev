import { FC, useContext } from "react";

import { AppBar as MuiAppBar, Toolbar } from "@material-ui/core";

import { RootContext, ContextState } from "@store/index";

const AppBar: FC = () => {
  const {
    appBar: [{ icon, title }, setAppBarState],
  } = useContext(RootContext);

  // TODO: add color

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <div className="start-node">{icon}</div>
        <div className="title">{title}</div>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

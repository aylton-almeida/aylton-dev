import { FC, useContext, useState } from "react";

import { AppBar as MuiAppBar, Slide, Toolbar } from "@material-ui/core";

import { RootContext } from "@store/index";

const AppBar: FC = () => {
  const {
    appBar: [{ icon, title, hidden }, setAppBarState],
  } = useContext(RootContext);

  // TODO: add color

  return (
    <Slide direction="down" in={!hidden} unmountOnExit>
      <MuiAppBar position="static">
        <Toolbar>
          <div className="start-node">{icon}</div>
          <div className="title">{title}</div>
        </Toolbar>
      </MuiAppBar>
    </Slide>
  );
};

export default AppBar;

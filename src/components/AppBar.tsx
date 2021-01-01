import { FC, useContext } from "react";

import { Slide, Toolbar, Typography } from "@material-ui/core";

import { RootContext } from "@store/index";
import { CustomAppBar } from "@styles/components/AppBar";

const AppBar: FC = () => {
  const {
    appBar: [{ icon, title, hidden }, setAppBarState],
  } = useContext(RootContext);

  return (
    <Slide direction="down" in={!hidden} unmountOnExit>
      <div>
        <CustomAppBar position="static" elevation={2}>
          <Toolbar className="toolbar">
            <div className="start-node">{icon}</div>
            <Typography variant="h6">{title}</Typography>
          </Toolbar>
        </CustomAppBar>
      </div>
    </Slide>
  );
};

export default AppBar;

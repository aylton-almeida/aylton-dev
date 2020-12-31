import { Button } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import { RootContext } from "@store/index";
import { FC, useContext, useEffect } from "react";

const AboutMePage: FC = () => {
  const {
    theme: [, setTheme],
    appBar: [, setAppBar],
  } = useContext(RootContext);

  useEffect(() => {
    setTheme({
      primary: {
        main: "#000",
      },
    });
    setAppBar({
      hidden: false,
      icon: <Person />,
      title: "Sobre Mim",
    });

    return () => {
      setAppBar({ hidden: true });
    };
  }, []);

  return (
    <Button variant="contained" color="primary">
      ok
    </Button>
  );
};

export default AboutMePage;

import { Button } from "@material-ui/core";
import { RootContext } from "@store/index";
import { CategoryList } from "@styles/theme";
import { FC, useContext, useEffect } from "react";
import Head from "next/head";
import CustomIconButton from "@components/CustomIconButton";

const [Icon, color, title] = CategoryList[CategoryList.length - 1];

const ConnectLayout: FC = () => {
  const {
    theme: [, setTheme],
    appBar: [, setAppBar],
  } = useContext(RootContext);

  useEffect(() => {
    setTheme({
      primary: {
        main: color,
        contrastText: "#fff",
      },
    });
    setAppBar({
      hidden: false,
      icon: (
        <CustomIconButton color={color}>
          <Icon />
        </CustomIconButton>
      ),
      title: title,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Button variant="contained" color="primary">
        ok
      </Button>
    </>
  );
};

export default ConnectLayout;

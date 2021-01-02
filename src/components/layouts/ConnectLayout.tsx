import { Button } from "@material-ui/core";
import { CategoryList } from "@styles/theme";
import { FC } from "react";
import Head from "next/head";

const [, , title] = CategoryList[CategoryList.length - 1];

const ConnectLayout: FC = () => {
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

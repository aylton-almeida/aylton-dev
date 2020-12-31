import { Main } from "@styles/pages";
import { FC, Fragment, ReactNode } from "react";
import Head from "next/head";
import { ButtonBase, Typography } from "@material-ui/core";
import { Chat, Code, Person, School, Work } from "@material-ui/icons";
import Link from "next/link";

import Perfil from "../assets/images/perfil.png";
import CustomIconButton from "@components/CustomIconButton";
import { CategoryList } from "@styles/theme";

const HomePage: FC = () => {
  return (
    <Main>
      <Head>
        <title>Aylton Dev</title>
      </Head>
      <Typography variant="h2" color="textPrimary">
        Aylton Almeida
      </Typography>
      <Typography variant="h4" color="textPrimary">
        Estudante e Desenvolvedor
      </Typography>
      <div className="img-container">
        <img src={Perfil} alt="Foto aylton" />
      </div>
      <div className="icons">
        {CategoryList.slice(0, -1).map(([Icon, color, title, route], index) => (
          <Link key={index} href={route}>
            <CustomIconButton color={color} onClick={() => {}} title={title}>
              <Icon fontSize="large" />
            </CustomIconButton>
          </Link>
        ))}
      </div>
      <ButtonBase className="connect-button">
        <div>
          {(() => {
            const Icon = CategoryList[CategoryList.length - 1][0];

            return (
              <>
                <Icon fontSize="large" />
                <Typography variant="button">
                  {CategoryList[CategoryList.length - 1][2]}
                </Typography>
              </>
            );
          })()}
        </div>
      </ButtonBase>
    </Main>
  );
};

export default HomePage;

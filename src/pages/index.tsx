import { Main } from "@styles/pages";
import { FC, Fragment, ReactNode } from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";
import { Chat, Code, Person, School, Work } from "@material-ui/icons";

import Perfil from "../assets/images/perfil.png";
import CustomIconButton from "@components/CustomIconButton";

const icons: [ReactNode, string, string, string][] = [
  [<Person fontSize="large" />, "#F2B90F", "Sobre mim", "/sobremim"],
  [<Work fontSize="large" />, "#D91136", "Experiências", "/experiencias"],
  [<Code fontSize="large" />, "#29A632", "Tecnologias", "/tecnologias"],
  [<School fontSize="large" />, "#F28B0C", "Educação", "/educacao"],
  [<Chat fontSize="large" />, "#9023D9", "Conectar", "/conectar"],
];

const Home: FC = () => {
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
        {icons.map(([icon, color, title], index) => (
          <Fragment key={index}>
            <CustomIconButton color={color} onClick={() => {}} title={title}>
              {icon}
            </CustomIconButton>
          </Fragment>
        ))}
      </div>
    </Main>
  );
};

export default Home;

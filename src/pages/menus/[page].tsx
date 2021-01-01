import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import Link from "next/link";
import { Container } from "@styles/pages/menus/[page]";
import {
  Fade,
  Hidden,
  SvgIconTypeMap,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import AboutMeLayout from "@components/layouts/AboutMeLayout";
import ConnectLayout from "@components/layouts/ConnectLayout";
import EducationLayout from "@components/layouts/EducationLayout";
import ExperiencesLayout from "@components/layouts/ExperiencesLayout";
import TechnologiesLayout from "@components/layouts/TechnologiesLayout";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { CategoryList as Categories } from "@styles/theme";
import { DefaultTheme } from "styled-components";
import CustomIconButton from "@components/CustomIconButton";

const layouts = [
  AboutMeLayout,
  ExperiencesLayout,
  TechnologiesLayout,
  EducationLayout,
  ConnectLayout,
];

const CategoryList: [
  OverridableComponent<SvgIconTypeMap<{}, "svg">>,
  string,
  string,
  string,
  FC
][] = Categories.map((category, index) => [...category, layouts[index]]);

const Menus: FC = () => {
  const {
    query: { page },
  } = useRouter();
  const currentRoute = page || "sobremim";

  const matchMd = useMediaQuery((theme: DefaultTheme) =>
    theme.breakpoints.up("md")
  );

  return (
    <Container>
      <section className="layout-container">
        {CategoryList.map(([, , , route, Layout]) => (
          <Fade
            in={route === currentRoute}
            unmountOnExit
            mountOnEnter
            key={route}
          >
            <div className="layout">
              <Layout />
            </div>
          </Fade>
        ))}
      </section>
      <nav className="nav-container">
        <ul className="nav-card">
          <Hidden smDown>
            <Typography variant="h4" color="textPrimary">
              Veja mais
            </Typography>
          </Hidden>
          {CategoryList.map(([Icon, color, title, route]) => (
            <li className="nav-item" key={title}>
              <Link href={{ pathname: `/menus/${route}` }}>
                <CustomIconButton
                  color={color}
                  showLabel={matchMd}
                  title={title}
                  hideTooltip={matchMd}
                >
                  <Icon fontSize={matchMd ? "large" : "default"} />
                </CustomIconButton>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Menus;

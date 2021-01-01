import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import Link from "next/link";
import { Container } from "@styles/pages/menus/[page]";
import { Fade, SvgIconTypeMap } from "@material-ui/core";
import AboutMeLayout from "@components/layouts/AboutMeLayout";
import ConnectLayout from "@components/layouts/ConnectLayout";
import EducationLayout from "@components/layouts/EducationLayout";
import ExperiencesLayout from "@components/layouts/ExperiencesLayout";
import TechnologiesLayout from "@components/layouts/TechnologiesLayout";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { CategoryList as Categories } from "@styles/theme";

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
        <div className="nav-card">
          {CategoryList.map(([Icon, color, title, route]) => (
            <div className="tab-item" key={title}>
              <Link href={{ pathname: `/menus/${route}` }}>{title}</Link>
            </div>
          ))}
        </div>
      </nav>
    </Container>
  );
};

export default Menus;

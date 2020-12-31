import {
  createMuiTheme,
  PaletteColorOptions,
  PaletteType,
  responsiveFontSizes,
  SvgIconTypeMap,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Chat, Code, Person, School, Work } from "@material-ui/icons";
import { ReactNode } from "react";

export function createAppTheme(
  type: PaletteType,
  primary?: PaletteColorOptions
) {
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type,
        primary,
        background: {
          paper: "#EFEFEF",
        },
        text: {
          primary: "#504E48",
        },
      },
      shape: {
        borderRadius: 12,
      },
    })
  );
}

const theme = createAppTheme("light");

export default theme;

export const CategoryList: [
  OverridableComponent<SvgIconTypeMap<{}, "svg">>,
  string,
  string,
  string
][] = [
  [Person, "#F2B90F", "Sobre mim", "/sobremim"],
  [Work, "#D91136", "Experiências", "/experiencias"],
  [Code, "#29A632", "Tecnologias", "/tecnologias"],
  [School, "#F28B0C", "Educação", "/educacao"],
  [Chat, "#9023D9", "Conecte-se", "/conectar"],
];

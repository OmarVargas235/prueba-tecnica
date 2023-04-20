import 'styled-components';
import { themeLight } from "./theme";

type CustomTheme = typeof themeLight;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
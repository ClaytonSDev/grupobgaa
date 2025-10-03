// src/types/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
      light: string;
    };
    fonts: {
      montserrat: string;
      bold: number;
      light: number;
    };
  }
}


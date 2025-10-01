import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      light: string;
      border: string;
      input: string;
      card: string; // ✅ Agora reconhecido
    };
    fonts: {
      montserrat: string;
      bold: number;
      light: number;
    };
  }
}

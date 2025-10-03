// src/theme.ts
import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      // Cores base
      primary: string;
      onPrimary: string;

      secondary: string;
      onSecondary: string;

      accent: string;
      onAccent: string;

      background: string;
      onBackground: string;

      surface: string;
      onSurface: string;

      // Suporte / UI
      text: string;
      light: string;
      muted: string;

      input: string;
      border: string;

      success: string;
      warning: string;
      error: string;

      focus: string; // cor do anel de foco
    };
    fonts: {
      montserrat: string;
      bold: number;
      light: number;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      pill: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    // Paleta principal
    primary:   "#6D2C91",
    onPrimary: "#FFFFFF",

    secondary:   "#441E50",
    onSecondary: "#FFFFFF",

    // Acento escurecido para contraste AA com texto branco
    accent:   "#2F9A62",
    onAccent: "#FFFFFF",

    // Fundo (modo escuro) e textos
    background:   "#441F4F",
    onBackground: "#C9D1D9",

    // Superfície clara para cartões/inputs
    surface:   "#FFFFFF",
    onSurface: "#1C1C1C",

    text:  "#C9D1D9",
    light: "#FFFFFF",
    muted: "#A7B0BA",

    // UI usadas no projeto
    input:  "#F3F4F6",                 // campos em cards claros
    border: "rgba(255,255,255,0.18)",  // borda sutil sobre fundo escuro

    // Estados
    success: "#22C55E",
    warning: "#F59E0B",
    error:   "#EF4444",

    // Aro de foco acessível
    focus: "#9AE6B4",
  },

  fonts: {
    montserrat: "'Montserrat', sans-serif",
    bold: 700,
    light: 300,
  },

  radii: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    pill: "9999px",
  },

  shadows: {
    sm: "0 2px 8px rgba(0,0,0,0.20)",
    md: "0 6px 18px rgba(0,0,0,0.25)",
    lg: "0 10px 26px rgba(0,0,0,0.30)",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

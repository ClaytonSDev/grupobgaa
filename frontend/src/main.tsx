import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { UserProvider } from "./context/UserContext"; // seu contexto de usuário
import { theme } from "./styles/theme"; // sua paleta oficial
import "./styles/index.css";           // seu CSS global/Tailwind (se houver)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

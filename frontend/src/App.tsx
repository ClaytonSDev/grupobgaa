import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LayoutWrapper from "./components/LayoutWrapper";

import whatsappIcon from "./assets/whatsapp-icon.webp";

/*
 * Ajustes de responsividade e acessibilidade:
 * - 100dvh para evitar salto da barra no mobile
 * - Espaços que respeitam áreas seguras (iPhone notch)
 * - FAB (WhatsApp) com tamanho/touch-area responsivos via clamp
 * - Focus ring visível e sem redundância de leitura (ícone decorativo)
 * - Evita sobrepor footer/conteúdo com "BottomSafeSpacer"
 * - Esconde FAB na impressão
 */

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100dvh; /* 100vh -> 100dvh corrige viewport em mobile */
  display: flex;
  flex-direction: column;

  /* garante que nada “vaze” horizontalmente */
  overflow-x: hidden;
  @supports (overflow-x: clip) {
    overflow-x: clip;
  }
`;

const BottomSafeSpacer = styled.div`
  /* Reserva espaço quando há um botão fixo, evitando sobreposição em telas pequenas */
  height: clamp(12px, 4vw, 24px);

  @media print {
    display: none;
  }
`;

const WhatsAppButton = styled.a`
  /* Variáveis de tamanho responsivo */
  --fab-size: clamp(52px, 6.5vw + 40px, 68px);
  --icon-size: clamp(24px, 2.8vw + 16px, 32px);

  position: fixed;
  bottom: max(16px, env(safe-area-inset-bottom));
  right: max(16px, env(safe-area-inset-right));
  width: var(--fab-size);
  height: var(--fab-size);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: transform 180ms ease, background-color 180ms ease;

  /* foco visível para navegação por teclado */
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 3px;
  }

  &:hover {
    transform: scale(1.06);
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.01s linear;
    &:hover {
      transform: none;
    }
  }

  /* não imprimir o FAB */
  @media print {
    display: none;
  }

  img {
    width: var(--icon-size);
    height: var(--icon-size);
    display: block;
  }
`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
        </Route>
        {/* Rota oculta para o dashboard, sem layout */}
        <Route path="/admin-dashboard-2025" element={<Dashboard />} />
      </Routes>

      {/* FAB do WhatsApp com rótulo acessível e ícone decorativo (alt="") */}
      <WhatsAppButton
        href="https://wa.me/5511985492095"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <img src={whatsappIcon} alt="" aria-hidden="true" />
      </WhatsAppButton>

      {/* Espaçador para evitar que o conteúdo final fique oculto atrás do FAB em telas menores */}
      <BottomSafeSpacer />
    </AppContainer>
  );
}

export default App;

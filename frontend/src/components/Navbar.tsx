// src/components/Navbar.tsx
import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logowineofc.webp";

const Nav = styled.nav`
  --pad-x: clamp(12px, 3vw, 32px);
  --pad-y: clamp(10px, 1.8vw, 16px);

  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: var(--pad-y) var(--pad-x);
`;

const Row = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Brand = styled.button`
  display: inline-flex;
  align-items: center;
  gap: clamp(8px, 1.6vw, 12px);
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;

  img {
    width: clamp(40px, 6vw, 70px);
    height: clamp(40px, 6vw, 70px);
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    transition: transform 160ms ease;
  }

  h2 {
    color: ${({ theme }) => theme.colors.light};
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: clamp(1.1rem, 2.5vw, 1.8rem);
    line-height: 1.1;
    margin: 0;
  }

  &:hover img { transform: scale(1.04); }
  @media (prefers-reduced-motion: reduce) { &:hover img { transform: none; } }
`;

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: clamp(1.6rem, 4vw, 2rem);
  cursor: pointer;
  line-height: 1;
  padding: 8px;
  border-radius: 8px;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.light};
    outline-offset: 2px;
  }

  @media (max-width: 768px) { display: inline-flex; }
`;

const LinksWrap = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.6vw, 18px);

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    inset-inline: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
    padding: 12px clamp(12px, 3vw, 24px);
    display: grid;
    grid-auto-rows: min-content;
    gap: 8px;

    transform: translateY(${({ $open }) => ($open ? "0" : "-8px")});
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition:
      transform 180ms ease,
      opacity 180ms ease,
      visibility 0s linear ${({ $open }) => ($open ? "0s" : "180ms")};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
      transform: none;
    }
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background-color 160ms ease, color 160ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.light};
    outline-offset: 2px;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const toggle = () => setOpen(v => !v);

  // Fecha ao clicar fora
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Fecha no ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Fecha quando voltar ao desktop e trava scroll do body no mobile ao abrir
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    const body = document.body;
    if (open && window.innerWidth <= 768) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => { body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <Nav aria-label="Navegação principal">
      <Row>
        <Brand onClick={() => handleNavigation("/")}>
          <img src={logo} alt="Logo Wine Tech" />
          <h2>Wine Tech</h2>
        </Brand>

        <ToggleButton
          onClick={toggle}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          ☰
        </ToggleButton>

        {/* Desktop: visível; Mobile: dropdown */}
        <LinksWrap $open={open} id="primary-navigation" ref={wrapRef}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/sobre" onClick={() => setOpen(false)}>Sobre</NavLink>
          <NavLink to="/servicos" onClick={() => setOpen(false)}>Serviços</NavLink>
          <NavLink to="/contato" onClick={() => setOpen(false)}>Contato</NavLink>
          <NavLink to="/login" onClick={() => setOpen(false)}>Área do Cliente</NavLink>
        </LinksWrap>
      </Row>
    </Nav>
  );
};

export default Navbar;

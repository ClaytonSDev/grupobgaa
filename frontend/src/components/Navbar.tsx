// src/components/Navbar.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo1.png";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  width: 100%;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.light};
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    img {
      width: 50px;
      height: 50px;
    }

    h2 {
      font-size: 1.4rem;
    }
  }
`;

const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 1.2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100vw;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1rem;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease;
    z-index: 999;
  }

  a {
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <Nav>
      <Brand onClick={() => handleNavigation("/")}>
        <img src={logo} alt="Logo Wine Tech" />
        <h2>Wine Tech</h2>
      </Brand>
      <ToggleButton onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
        ☰
      </ToggleButton>
      <NavLinks $isOpen={isOpen}>
        <a onClick={() => handleNavigation("/")}>Home</a>
        <a onClick={() => handleNavigation("/sobre")}>Sobre</a>
        <a onClick={() => handleNavigation("/servicos")}>Serviços</a>
        <a onClick={() => handleNavigation("/contato")}>Contato</a>
        <a onClick={() => handleNavigation("/login")}>Área do Cliente</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

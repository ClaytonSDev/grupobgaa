// src/components/Footer.tsx
import styled from "styled-components";
import linkedinIcon from "../assets/Linkedinwine.webp";
import instagramIcon from "../assets/Instagramwine.webp";
import facebookIcon from "../assets/Facebookwine.webp";

const FooterContainer = styled.footer`
  margin-top: 40px;
  padding: 0.6rem 1rem; /* bem menor */
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.85rem;
  line-height: 1.3;
`;

const ExtraText = styled.p`
  margin: 0 0 0.2rem 0; /* mínimo */
  font-size: 0.8rem;
  opacity: 0.85;
`;

const SocialLinks = styled.div`
  margin-top: 0.4rem; /* menor espaço */
  display: flex;
  gap: 16px; /* ícones mais próximos */
  justify-content: center;
  align-items: center;

  a {
    display: inline-block;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 24px; /* ícones menores */
      height: 24px;
      filter: brightness(0) invert(1);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ExtraText>Uma empresa do Grupo BGAA</ExtraText>
      <p>
        © {new Date().getFullYear()} Wine Tech. Todos os direitos reservados.
      </p>
      <SocialLinks>
        <a
          href="https://www.linkedin.com/company/winetech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/company/winetech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/company/winetech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;

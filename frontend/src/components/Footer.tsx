// src/components/Footer.tsx
import styled from "styled-components";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";

const FooterContainer = styled.footer`
  margin-top: 60px;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    display: inline-block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 36px;
      height: 36px;
      filter: brightness(0) invert(1);
    }
  }

  @media (max-width: 480px) {
    gap: 20px;

    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
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

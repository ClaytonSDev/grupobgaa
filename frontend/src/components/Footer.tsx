// src/components/Footer.tsx
import styled from "styled-components";
import linkedinIcon from "../assets/Linkedinwine.webp";
import instagramIcon from "../assets/Instagramwine.webp";
import facebookIcon from "../assets/Facebookwine.webp";

const FooterBar = styled.footer`
  --safe-left: env(safe-area-inset-left);
  --safe-right: env(safe-area-inset-right);
  --safe-bottom: env(safe-area-inset-bottom);

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-top: 1px solid rgba(255, 255, 255, 0.12);

  /* padding que respeita notch e é responsivo */
  padding: clamp(12px, 3vw, 24px)
    max(16px, var(--safe-right))
    max(16px, var(--safe-bottom))
    max(16px, var(--safe-left));

  text-align: center;

  /* evita qualquer possibilidade de overflow horizontal */
  overflow-x: hidden;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 0; /* já controlado acima */
  min-width: 0; /* impede filhos de “estourarem” */
`;

const BrandLine = styled.p`
  margin: 0 0 6px 0;
  font-size: clamp(0.8rem, 1.5vw, 0.95rem);
  line-height: 1.35;
  opacity: 0.9;
`;

const Copy = styled.p`
  margin: 0;
  font-size: clamp(0.85rem, 1.6vw, 1rem);
  line-height: 1.4;
`;

const SocialNav = styled.nav`
  margin-top: 10px;
`;

const SocialList = styled.ul`
  /* lista sem bullets, com wrap fluido */
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  gap: clamp(10px, 2.2vw, 16px);
  justify-content: center;
  align-items: center;
`;

const SocialItem = styled.li`
  /* nada fixo aqui para não criar overflow */
  min-width: 0;
`;

const SocialButton = styled.a`
  /* Área de toque acessível */
  width: clamp(40px, 6vw, 48px);
  height: clamp(40px, 6vw, 48px);
  border-radius: 9999px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  transition: transform 120ms ease, background-color 120ms ease;
  will-change: transform;

  &:hover {
    transform: translateY(-1px);
    background-color: rgba(255, 255, 255, 0.12);
  }
  &:active {
    transform: translateY(0);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.light};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.01s linear;
    &:hover,
    &:active {
      transform: none;
    }
  }

  img {
    /* Ícone decorativo: o texto acessível vem do aria-label do link */
    width: clamp(18px, 2.6vw, 24px);
    height: clamp(18px, 2.6vw, 24px);
    display: block;
    filter: brightness(0) invert(1);
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterBar aria-label="Rodapé">
      <Inner>
        <BrandLine>Uma empresa do Grupo BGAA</BrandLine>
        <Copy>© {year} Wine Tech. Todos os direitos reservados.</Copy>

        <SocialNav aria-label="Redes sociais">
          <SocialList>
            <SocialItem>
              <SocialButton
                href="https://www.linkedin.com/company/winetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Wine Tech"
                title="LinkedIn"
              >
                <img src={linkedinIcon} alt="" />
              </SocialButton>
            </SocialItem>

            <SocialItem>
              <SocialButton
                href="https://www.instagram.com/company/winetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Wine Tech"
                title="Instagram"
              >
                <img src={instagramIcon} alt="" />
              </SocialButton>
            </SocialItem>

            <SocialItem>
              <SocialButton
                href="https://www.facebook.com/company/winetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Wine Tech"
                title="Facebook"
              >
                <img src={facebookIcon} alt="" />
              </SocialButton>
            </SocialItem>
          </SocialList>
        </SocialNav>
      </Inner>
    </FooterBar>
  );
};

export default Footer;

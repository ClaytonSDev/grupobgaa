// src/pages/Servicos.tsx
import React from "react";
import styled from "styled-components";
import vidSistemasMp4 from "../videos/sistemas.mp4";
import vidSistemasWebm from "../videos/sistemas.webm";
import vidEcommerceMp4 from "../videos/ecommerce.mp4";
import vidEcommerceWebm from "../videos/ecommerce.webm";
import vidInfraMp4 from "../videos/infraestrutura.mp4";
import vidInfraWebm from "../videos/infraestrutura.webm";
import vidConsultoriaMp4 from "../videos/consultoria.mp4";
import vidConsultoriaWebm from "../videos/consultoria.webm";
import vidMonitoramentoMp4 from "../videos/monitoramento.mp4";
import vidMonitoramentoWebm from "../videos/monitoramento.webm";
import vidSegurancaMp4 from "../videos/seguranca.mp4";
import vidSegurancaWebm from "../videos/seguranca.webm";

/* --------- ESTILOS --------- */
const Page = styled.div`
  min-height: 100dvh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.montserrat};
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 1.25rem 40px;
  min-width: 0;

  @media (max-width: 768px) {
    padding: 72px 1rem 36px;
  }
  @media (max-width: 480px) {
    padding: 64px 0.9rem 32px;
  }
`;

const Heading = styled.header`
  text-align: center;
  margin-bottom: 1.75rem;

  h2 {
    margin: 0;
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: clamp(1.5rem, 2.4vw + 0.6rem, 2.3rem);
    color: ${({ theme }) => theme.colors.light};
    letter-spacing: 0.2px;
  }
  p {
    margin: 0.65rem auto 0;
    max-width: 820px;
    font-size: clamp(0.96rem, 0.7vw + 0.7rem, 1.06rem);
    line-height: 1.6;
    font-weight: ${({ theme }) => theme.fonts.light};
    opacity: 0.95;
  }
`;

const Grid = styled.section`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  grid-column: span 6;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1024px) {
    grid-column: span 8;
  }
  @media (max-width: 720px) {
    grid-column: auto;
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 2px;
  }
`;

const Media = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transform: translateZ(0);
    transition: transform 0.25s ease;
  }

  ${Card}:hover & video {
    transform: scale(1.015);
  }
`;

const Body = styled.div`
  padding: 1rem 1rem 1.15rem;
  text-align: center;

  @media (max-width: 480px) {
    padding: 0.9rem;
  }
`;

const Title = styled.h3`
  margin: 0 0 0.6rem 0;
  font-size: clamp(1.06rem, 0.9vw + 0.85rem, 1.35rem);
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};

  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 3px;
    margin: 8px auto 0;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
  }
`;

const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: clamp(0.94rem, 0.72vw + 0.68rem, 1.02rem);
  line-height: 1.65;
  font-weight: ${({ theme }) => theme.fonts.light};
  opacity: 0.95;
`;

/* --------- HOOK: respeita prefers-reduced-motion para vídeo --------- */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!query?.matches);
    onChange();
    query?.addEventListener?.("change", onChange);
    return () => query?.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/* --------- DADOS --------- */
const servicos = [
  {
    titulo: "Sistemas sob medida",
    descricao:
      "Software que se adapta ao seu processo — não o contrário. Ganhe controle, elimine retrabalho e acelere a operação.",
    mp4: vidSistemasMp4,
    webm: vidSistemasWebm,
  },
  {
    titulo: "E-commerce inteligente",
    descricao:
      "Vitrine digital rápida e segura para vender mais. Checkout otimizado, integrações com pagamentos e logística.",
    mp4: vidEcommerceMp4,
    webm: vidEcommerceWebm,
  },
  {
    titulo: "Infraestrutura robusta",
    descricao:
      "Cloud e redes com performance, disponibilidade e custos sob controle. Backups e DR para máxima continuidade.",
    mp4: vidInfraMp4,
    webm: vidInfraWebm,
  },
  {
    titulo: "Consultoria especializada",
    descricao:
      "Estratégia, roadmap e execução orientados a resultados. Capacitação da equipe e cultura orientada a dados.",
    mp4: vidConsultoriaMp4,
    webm: vidConsultoriaWebm,
  },
  {
    titulo: "Monitoramento contínuo",
    descricao:
      "Alertas em tempo real, análise preditiva e automação para operar no modo pró-ativo.",
    mp4: vidMonitoramentoMp4,
    webm: vidMonitoramentoWebm,
  },
  {
    titulo: "Segurança digital",
    descricao:
      "Cibersegurança ponta a ponta: prevenção, detecção, resposta e conformidade com LGPD.",
    mp4: vidSegurancaMp4,
    webm: vidSegurancaWebm,
  },
];

/* --------- COMPONENTE --------- */
const Servicos: React.FC = () => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <Page>
      <Container>
        <Heading>
          <h2>Nossos Serviços</h2>
          <p>
            Do planejamento à operação — soluções para eficiência, redução de
            custos e crescimento.
          </p>
        </Heading>

        <Grid>
          {servicos.map((s, i) => (
            <Card key={i} tabIndex={-1}>
              <Media>
                <video
                  autoPlay={!prefersReduced}
                  muted
                  loop={!prefersReduced}
                  playsInline
                  preload="metadata"
                  aria-label={`Vídeo ilustrativo: ${s.titulo}`}
                >
                  {/* MP4 primeiro para compatibilidade máxima */}
                  <source src={s.mp4} type="video/mp4" />
                  <source src={s.webm} type="video/webm" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </Media>
              <Body>
                <Title>{s.titulo}</Title>
                <Description>{s.descricao}</Description>
              </Body>
            </Card>
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default Servicos;

// src/pages/Home.tsx
import React from "react";
import styled from "styled-components";

import logo from "../assets/logowineofc.webp";
import imgwineequipe from "../assets/imgwineequipe.webp";
import imgwinepesquisa from "../assets/imgwinepesquisa.webp";
import destaque1 from "../assets/imgwineresultado.webp";
import destaque2 from "../assets/imgsetorial.webp";
import destaque3 from "../assets/Imgwineparceria.webp";

const Page = styled.main`
  background: ${({ theme }) => theme.colors.background}; /* #2f1437 */
  color: ${({ theme }) => theme.colors.light};           /* #FFFFFF */
  font-family: ${({ theme }) => theme.fonts.montserrat};
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin-inline: auto;
  padding: clamp(64px, 7vw, 96px) clamp(12px, 3vw, 24px) clamp(40px, 6vw, 64px);
  min-width: 0;
`;

/* ----------------- HERO ----------------- */
const Hero = styled.section`
  text-align: center;
  margin-bottom: clamp(28px, 5vw, 56px);

  .logo {
    width: clamp(96px, 18vw, 180px);
    height: clamp(96px, 18vw, 180px);
    object-fit: cover;
    border-radius: 50%;
    display: block;
    margin-inline: auto;
    margin-bottom: clamp(12px, 2vw, 20px);
    box-shadow: 0 8px 26px rgba(0, 0, 0, 0.45);
  }

  h1 {
    margin: 0 0 10px 0;
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: clamp(1.9rem, 3.6vw, 2.6rem);
    line-height: 1.2;

    span {
      color: ${({ theme }) => theme.colors.secondary}; /* #441f4f */
    }
  }

  p {
    margin: 0 auto;
    max-width: 70ch;
    font-size: clamp(1rem, 0.8vw + 0.7rem, 1.12rem);
    line-height: 1.7;
    font-weight: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.text}; /* #bebcbf */
    opacity: 0.95;
    text-align: center;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: clamp(14px, 2vw, 18px);
  padding: 0.85rem 1.4rem;
  min-width: 180px;

  background: ${({ theme }) => theme.colors.secondary}; /* #441f4f */
  color: ${({ theme }) => theme.colors.light};
  border-radius: 999px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.bold};

  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.28);
    background: ${({ theme }) => theme.colors.primary}; /* #441e50 */
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/* ----------------- SECTION (imagem + texto) ----------------- */
const Section = styled.section<{ reverse?: boolean }>`
  display: grid;
  gap: clamp(18px, 4vw, 40px);
  align-items: center;
  grid-template-columns: 1fr;
  margin: clamp(28px, 5vw, 48px) 0;

  @media (min-width: 900px) {
    grid-template-columns: ${({ reverse }) => (reverse ? "0.9fr 1.1fr" : "1.1fr 0.9fr")};
  }

  .image {
    order: ${({ reverse }) => (reverse ? 2 : 1)};
    @media (min-width: 900px) {
      order: 1;
      ${({ reverse }) => reverse && "order: 2;"}
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      aspect-ratio: 14 / 10;
      object-fit: cover;
      border-radius: 14px;
      box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
    }
  }

  .text {
    order: ${({ reverse }) => (reverse ? 1 : 2)};

    /* MOBILE: centralizado — DESKTOP: justificado */
    text-align: center;
    @media (min-width: 900px) {
      text-align: justify;
      text-justify: inter-word;
    }

    @media (min-width: 900px) {
      order: 2;
      ${({ reverse }) => reverse && "order: 1;"}
    }

    h2 {
      margin: 0 0 8px 0;
      font-size: clamp(1.3rem, 1.8vw + 0.7rem, 2rem);
      font-weight: ${({ theme }) => theme.fonts.bold};
      color: ${({ theme }) => theme.colors.light}; /* subtítulos brancos */
    }
    p {
      margin: 0 auto;
      max-width: 70ch;
      font-size: clamp(0.98rem, 0.8vw + 0.68rem, 1.08rem);
      line-height: 1.8;
      font-weight: ${({ theme }) => theme.fonts.light};
      color: ${({ theme }) => theme.colors.text}; /* #bebcbf */
      opacity: 0.95;
    }
  }
`;

/* ----------------- CARDS ----------------- */
const Cards = styled.section`
  margin: clamp(28px, 6vw, 56px) 0 0;
`;

const CardsGrid = styled.div`
  display: grid;
  gap: clamp(14px, 3.2vw, 28px);
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.primary}; /* #441e50 */
  color: ${({ theme }) => theme.colors.light};
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-width: 0;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.32);
  }

  .media img {
    width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 16 / 10;
    object-fit: cover;
  }

  .body {
    padding: 1rem 1rem 1.2rem;
    display: grid;
    gap: 0.6rem;
    align-content: start;

    /* MOBILE: centralizado — DESKTOP: justificado */
    text-align: center;
    @media (min-width: 900px) {
      text-align: justify;
      text-justify: inter-word;
    }

    h3 {
      margin: 0;
      font-size: clamp(1.02rem, 1vw + 0.8rem, 1.3rem);
      font-weight: ${({ theme }) => theme.fonts.bold};
      color: ${({ theme }) => theme.colors.light}; /* branco */
    }
    p {
      margin: 0 auto;
      max-width: 48ch;
      font-size: clamp(0.95rem, 0.7vw + 0.68rem, 1rem);
      line-height: 1.7;
      font-weight: ${({ theme }) => theme.fonts.light};
      color: ${({ theme }) => theme.colors.light};
      opacity: 0.9;
    }
  }

  .actions {
    padding: 0 1rem 1.1rem;
    margin-top: auto;
    display: flex;
    justify-content: center;
  }
`;

const CardButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 0.7rem 1.1rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.secondary}; /* #441f4f */
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.bold};
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    background: ${({ theme }) => theme.colors.primary}; /* #441e50 */
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

/* ----------------- CLIENTES ----------------- */
const Clients = styled.section`
  margin: clamp(36px, 7vw, 64px) 0;
  text-align: center;

  h2 {
    margin: 0 0 12px 0;
    font-size: clamp(1.3rem, 1.8vw + 0.7rem, 2rem);
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.light}; /* branco */
  }
`;

const ClientsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(10px, 2.4vw, 16px);
  justify-content: center;
`;

const Chip = styled.span`
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: clamp(0.9rem, 0.7vw + 0.68rem, 1rem);
  white-space: nowrap;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
`;

/* ----------------- TIME ----------------- */
const Team = styled.section`
  margin: clamp(36px, 7vw, 64px) 0 0;
  text-align: center;

  h2 {
    margin: 0 0 12px 0;
    font-size: clamp(1.3rem, 1.8vw + 0.7rem, 2rem);
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.light}; /* branco */
  }
`;

const TeamGrid = styled.div`
  display: grid;
  gap: clamp(14px, 3vw, 24px);
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const Member = styled.article`
  background: ${({ theme }) => theme.colors.card}; /* #ffffff */
  color: ${({ theme }) => theme.colors.primary};  /* #441e50 */
  border: 1px solid ${({ theme }) => theme.colors.border}; /* #cccccc */
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
  padding: 1.1rem;
  text-align: center;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.26);
  }

  .avatar {
    width: 86px;
    height: 86px;
    margin: 0 auto 0.6rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.colors.light};
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: 1.2rem;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0.2rem 0 0.2rem 0;
    font-size: clamp(1rem, 0.8vw + 0.8rem, 1.15rem);
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
  .role {
    margin: 0;
    opacity: 0.95;
    font-size: clamp(0.9rem, 0.6vw + 0.7rem, 1rem);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary}; /* #441f4f */
  }
  p.bio {
    margin: 0.55rem auto 0;
    max-width: 44ch;
    font-size: clamp(0.9rem, 0.6vw + 0.68rem, 1rem);
    line-height: 1.6;
    font-weight: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
    text-align: justify;
    text-justify: inter-word;
  }
`;

const Home: React.FC = () => {
  const clients = [
    "Grupo BGAA",
    "Wine Tech",
    "Alpha Saúde",
    "LogiMax",
    "EducaPro",
    "RetailOne",
    "FinSync",
    "NovaCloud",
    "DataForge",
    "SecurePay",
  ];

  const team = [
    { name: "Bruna Alves", role: "CEO & Estratégia", initials: "BA", bio: "Conecta objetivos de negócio à execução, garantindo foco em resultados." },
    { name: "Gabriel Rocha", role: "CTO & Arquitetura", initials: "GR", bio: "Desenha soluções escaláveis, seguras e fáceis de evoluir." },
    { name: "Ana Lima", role: "UX Engineer", initials: "AL", bio: "Experiências simples e eficientes, sempre orientadas por dados." },
  ];

  return (
    <Page>
      <Container>
        <Hero>
          <h1>
            Bem-vindo à 
          </h1>
          <br />
          <br />
          <img className="logo" src={logo} alt="Logo Wine Tech" loading="lazy" />
          <p>
            Inovação e versatilidade em soluções digitais. Desenvolvimento de softwares, sistemas e sites que impulsionam seu negócio — em qualquer segmento.
          </p>
          <CTAButton href="#contato">Fale Conosco</CTAButton>
        </Hero>

        <Section>
          <div className="image">
            <img src={imgwineequipe} alt="Equipe Wine Tech em ação" loading="lazy" decoding="async" />
          </div>
          <div className="text">
            <h2>Por que a Wine Tech?</h2>
            <p>Da ideia à realidade digital: soluções robustas e intuitivas que vão além do “funcionar”. Estratégia, design e engenharia para gerar impacto real — mais eficiência, menos retrabalho e resultados mensuráveis.</p>
          </div>
        </Section>

        <Section reverse>
          <div className="image">
            <img src={imgwinepesquisa} alt="Resultados concretos" loading="lazy" decoding="async" />
          </div>
          <div className="text">
            <h2>Resultados, não só entregas</h2>
            <p>Compromisso com ROI. Medimos performance e evoluímos continuamente para que sua solução acompanhe o ritmo do negócio.</p>
          </div>
        </Section>

        <Cards aria-label="Destaques">
          <CardsGrid>
            {[
              { img: destaque1, title: "Execução ágil e transparente", text: "Sprints curtos, planejamento claro e comunicação contínua. Você acompanha tudo com previsibilidade." },
              { img: destaque2, title: "Expertise multissetorial", text: "Saúde, logística, varejo, educação e além. Integrações e compliance adequadas ao seu setor." },
              { img: destaque3, title: "Parcerias que perduram", text: "Suporte próximo, roadmap evolutivo e monitoramento contínuo. Crescemos com você." },
            ].map((c, i) => (
              <Card key={i}>
                <div className="media">
                  <img src={c.img} alt={c.title} />
                </div>
                <div className="body">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
                <div className="actions">
                  <CardButton href="#contato">Saiba Mais</CardButton>
                </div>
              </Card>
            ))}
          </CardsGrid>
        </Cards>

        <Clients aria-label="Clientes e Parceiros">
          <h2>Alguns clientes e parceiros</h2>
          <ClientsWrap>
            {clients.map((c, i) => (
              <Chip key={i}>{c}</Chip>
            ))}
          </ClientsWrap>
        </Clients>

        <Team aria-label="Nossa Equipe">
          <h2>Time</h2>
          <TeamGrid>
            {team.map((m, i) => (
              <Member key={i}>
                <div className="avatar" aria-hidden>{m.initials}</div>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p className="bio">{m.bio}</p>
              </Member>
            ))}
          </TeamGrid>
        </Team>
      </Container>
    </Page>
  );
};

export default Home;

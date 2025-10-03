// src/pages/Home.tsx
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logowineofc.webp";
import imgwineequipe from "../assets/imgwineequipe.webp";
import destaque1 from "../assets/imgwineresultado.webp";
import destaque2 from "../assets/imgsetorial.webp";
import destaque3 from "../assets/Imgwineparceria.webp";
import bgImage from "../assets/background-tech.webp";

/* ===== Reveal (com respeito ao prefers-reduced-motion) ===== */
const useReveal = (once = true, threshold = 0.18) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) { setShow(true); return; }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  return { ref, show };
};

const Reveal = styled.div<{ $show: boolean; $delay?: number }>`
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transform: translateY(${({ $show }) => ($show ? "0" : "14px")});
  transition: opacity 420ms ease ${({ $delay }) => ($delay || 0) + "ms"},
    transform 420ms ease ${({ $delay }) => ($delay || 0) + "ms"};

  @media (prefers-reduced-motion: reduce) { opacity: 1; transform: none; transition: none; }
`;

/* ===== Base segura (sem overflow lateral) ===== */
const Page = styled.div`
  min-height: 100dvh;
  color: ${({ theme }) => theme.colors.text};
  background:
    linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.65)),
    url(${bgImage}) center/cover no-repeat;
  overflow-x: hidden;
  @supports (overflow-x: clip) { overflow-x: clip; }

  /* evita jank do background fixo em mobile */
  @media (hover: hover) and (pointer: fine) and (min-width: 901px) {
    background-attachment: fixed;
  }
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: clamp(64px, 6vw, 80px) clamp(16px, 3.2vw, 20px) clamp(28px, 5vw, 40px);
  min-width: 0; /* chave para impedir overflow em grids internos */
`;

/* ===== Hero ===== */
const Hero = styled.header`
  text-align: center;
  margin-bottom: clamp(36px, 6vw, 56px);

  img.logo {
    width: clamp(120px, 15vw, 220px);
    height: clamp(120px, 15vw, 220px);
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 6px 18px rgba(0,0,0,.35);
    margin-bottom: 20px;
  }

  h1 {
    margin: 0 0 10px 0;
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: clamp(1.6rem, 2.6vw + 0.6rem, 2.4rem);
    color: ${({ theme }) => theme.colors.light};
    letter-spacing: .2px;
  }

  p {
    margin: 0 auto;
    max-width: 760px;
    font-size: clamp(1rem, .9vw + .7rem, 1.12rem);
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.light};
    opacity: .95;
    font-weight: ${({ theme }) => theme.fonts.light};
    overflow-wrap: anywhere;
  }
`;

const ContactButton = styled(Link)`
  margin: 1.1rem auto 0;
  padding: 0.7rem 1.2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent || theme.colors.light};
  border-radius: 10px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.bold};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  min-width: 180px;
  transition: transform .15s ease, box-shadow .15s ease, background .2s ease;
  outline: 2px solid transparent;
  outline-offset: 2px;

  &:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(0,0,0,.25); }
  &:active { transform: translateY(0); box-shadow: none; }
  &:focus-visible { outline-color: ${({ theme }) => theme.colors.secondary}; }

  @media (max-width: 480px) { width: 100%; }
`;

/* ===== Seção Img + Texto: 2 colunas → 1 coluna no mobile ===== */
const Section = styled.section<{ reverse?: boolean }>`
  display: grid;
  align-items: center;
  margin: clamp(40px, 6.2vw, 56px) 0;
  gap: clamp(16px, 4vw, 40px);

  /* colunas com minmax(0,1fr) e filhos "min-width:0" para não estourar */
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);

  ${({ reverse }) => reverse && `
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    & > .image { order: 2; }
    & > .text { order: 1; }
  `}

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    & > .image, & > .text { order: initial; }
    text-align: center;
  }

  .text {
    color: ${({ theme }) => theme.colors.light};
    text-align: left;
    min-width: 0;

    h2 {
      margin: 0 0 .6rem 0;
      font-size: clamp(1.25rem, 1.8vw + .8rem, 1.8rem);
      font-weight: ${({ theme }) => theme.fonts.bold};
      color: ${({ theme }) => theme.colors.light};
    }
    p {
      margin: 0;
      font-size: clamp(1rem, .8vw + .68rem, 1.08rem);
      line-height: 1.7;
      font-weight: ${({ theme }) => theme.fonts.light};
      opacity: .95;
      overflow-wrap: anywhere;
    }

    @media (max-width: 900px) { text-align: center; }
  }

  .image {
    width: 100%;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 8px 22px rgba(0,0,0,.35);
    min-width: 0;

    img {
      width: 100%;
      display: block;
      aspect-ratio: 16/10;
      object-fit: cover;
      height: auto;
    }
  }
`;

/* ===== Destaques: auto-fit/minmax (quebra sozinho) ===== */
const Highlights = styled.section`
  margin: clamp(44px, 6.5vw, 60px) 0 20px;
  display: grid;
  gap: clamp(16px, 3.2vw, 28px);
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(0,0,0,.28);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  transition: transform .18s ease, box-shadow .18s ease;

  &:hover { transform: translateY(-4px); box-shadow: 0 16px 34px rgba(0,0,0,.32); }

  .media img { width: 100%; display: block; aspect-ratio: 16/10; object-fit: cover; height: auto; }

  .body {
    padding: 1rem 1rem 1.2rem;
    display: grid;
    gap: .7rem;
    align-content: start;
    text-align: center;

    h3 { margin: 0; font-size: clamp(1.05rem, 1vw + .8rem, 1.35rem); font-weight: ${({ theme }) => theme.fonts.bold}; }
    p { margin: 0 auto; font-size: clamp(.95rem, .7vw + .7rem, 1rem); line-height: 1.65; font-weight: ${({ theme }) => theme.fonts.light}; opacity: .95; max-width: 46ch; text-align: center; overflow-wrap: anywhere; }
  }

  .actions { padding: 0 1rem 1.1rem; margin-top: auto; display: flex; justify-content: center; }
`;

/* ===== Clientes: strip sem overflow e com máscara cross-browser ===== */
const Clients = styled.section`
  margin: 48px 0 16px;
  text-align: center;

  h2 {
    margin: 0 0 .8rem 0;
    color: ${({ theme }) => theme.colors.light};
    font-size: clamp(1.2rem, 1.6vw + .8rem, 1.7rem);
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  .strip {
    --speed: 28s;
    margin: 12px auto 0;
    max-width: 1120px;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }

  @supports (overflow: clip) {
    .strip { overflow: clip; }
  }

  .track {
    display: inline-flex;
    gap: clamp(18px, 3vw, 36px);
    width: max-content;
    will-change: transform;
    contain: layout paint;
    animation: scroll var(--speed) linear infinite;
  }

  .logo {
    padding: .6rem 1rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.background};
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: clamp(.92rem, .7vw + .68rem, 1rem);
    white-space: nowrap;
    box-shadow: 0 6px 18px rgba(0,0,0,.22);
  }

  .strip:hover .track { animation-play-state: paused; }

  @keyframes scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
`;

/* ===== Time: auto-fit/minmax como nos destaques ===== */
const Team = styled.section`
  margin: 56px 0 16px;
  text-align: center;

  h2 {
    margin: 0 0 .8rem 0;
    color: ${({ theme }) => theme.colors.light};
    font-size: clamp(1.2rem, 1.6vw + .8rem, 1.7rem);
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
`;

const TeamGrid = styled.div`
  display: grid;
  gap: clamp(16px, 3vw, 24px);
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
`;

const Member = styled.article`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(0,0,0,.22);
  padding: 1rem;
  text-align: center;
  transition: transform .18s ease, box-shadow .18s ease;

  &:hover { transform: translateY(-3px); box-shadow: 0 16px 34px rgba(0,0,0,.26); }

  .avatar {
    width: 86px; height: 86px; margin: 0 auto .6rem; border-radius: 50%; display: grid; place-items: center;
    color: ${({ theme }) => theme.colors.light}; font-weight: ${({ theme }) => theme.fonts.bold}; font-size: 1.2rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    box-shadow: 0 8px 22px rgba(0,0,0,.2);
  }

  h3 { margin: .2rem 0 .2rem 0; font-size: clamp(1rem, .8vw + .8rem, 1.2rem); font-weight: ${({ theme }) => theme.fonts.bold}; }
  .role { margin: 0; opacity: .85; font-size: clamp(.9rem, .6vw + .7rem, 1rem); font-weight: ${({ theme }) => theme.fonts.light}; }
  p { margin: .6rem auto 0; max-width: 44ch; font-size: clamp(.92rem, .6vw + .68rem, 1rem); line-height: 1.6; font-weight: ${({ theme }) => theme.fonts.light}; overflow-wrap: anywhere; }
`;

/* Apenas para leitores de tela */
const SR = styled.span`
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px; height: 1px; overflow: hidden;
`;

const Home: React.FC = () => {
  const heroR = useReveal(true);
  const sec1R = useReveal(true);
  const sec2R = useReveal(true);

  const clients = [
    "Grupo BGAA","Wine Tech","Alpha Saúde","LogiMax","EducaPro",
    "RetailOne","FinSync","NovaCloud","DataForge","SecurePay",
  ];

  const team = [
    { name: "Bruna Alves", role: "CEO & Estratégia", initials: "BA", bio: "Conecta objetivos de negócio à execução, garantindo foco em resultados." },
    { name: "Gabriel Rocha", role: "CTO & Arquitetura", initials: "GR", bio: "Desenha soluções escaláveis, seguras e fáceis de evoluir." },
    { name: "Ana Lima", role: "UX Engineer", initials: "AL", bio: "Experiências simples e eficientes, sempre orientadas por dados." },
  ];

  return (
    <Page>
      <Container>
        {/* HERO */}
        <Reveal as="section" ref={heroR.ref as any} $show={heroR.show} aria-label="Seção de boas-vindas">
          <Hero>
            <img className="logo" src={logo} alt="Logo Wine Tech" loading="lazy" decoding="async" width={220} height={220} sizes="(max-width: 600px) 160px, 220px" />
            <h1>Bem-vindo à Wine Tech</h1>
            <p>Inovação e versatilidade em soluções digitais. Desenvolvimento de softwares, sistemas e sites que impulsionam seu negócio — em qualquer segmento.</p>
            <ContactButton to="/contato" aria-label="Ir para a página de contato">Fale Conosco</ContactButton>
          </Hero>
        </Reveal>

        {/* SEÇÃO 1 */}
        <Reveal as="section" ref={sec1R.ref as any} $show={sec1R.show} aria-label="Por que a Wine Tech?">
          <Section>
            <div className="image">
              <img src={imgwineequipe} alt="Equipe Wine Tech em ação" loading="lazy" decoding="async" sizes="(max-width: 900px) 100vw, 560px" />
            </div>
            <div className="text">
              <h2>Por que a Wine Tech?</h2>
              <p>Da ideia à realidade digital: soluções robustas e intuitivas que vão além do “funcionar”. Estratégia, design e engenharia para gerar impacto real — mais eficiência, menos retrabalho e resultados mensuráveis.</p>
            </div>
          </Section>
        </Reveal>

        {/* SEÇÃO 2 */}
        <Reveal as="section" ref={sec2R.ref as any} $show={sec2R.show} $delay={80} aria-label="Resultados, não só entregas">
          <Section reverse>
            <div className="image">
              <img src={destaque1} alt="Resultados concretos" loading="lazy" decoding="async" sizes="(max-width: 900px) 100vw, 560px" />
            </div>
            <div className="text">
              <h2>Resultados, não só entregas</h2>
              <p>Compromisso com ROI. Medimos performance e evoluímos continuamente para que sua solução acompanhe o ritmo do negócio.</p>
            </div>
          </Section>
        </Reveal>

        {/* CARDS */}
        <Highlights aria-label="Destaques">
          {[
            { img: destaque1, title: "Execução ágil e transparente", text: "Sprints curtos, planejamento claro e comunicação contínua. Você acompanha tudo com previsibilidade." },
            { img: destaque2, title: "Expertise multissetorial", text: "Saúde, logística, varejo, educação e além. Integrações e compliance adequadas ao seu setor." },
            { img: destaque3, title: "Parcerias que perduram", text: "Suporte próximo, roadmap evolutivo e monitoramento contínuo. Crescemos com você." },
          ].map((c, i) => (
            <Card key={i}>
              <div className="media">
                <img src={c.img} alt="" loading="lazy" decoding="async" sizes="(max-width: 720px) 100vw, 360px" />
              </div>
              <div className="body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
              <div className="actions">
                <ContactButton to="/contato"><SR>Contato</SR>Fale Conosco</ContactButton>
              </div>
            </Card>
          ))}
        </Highlights>

        {/* CLIENTES */}
        <Clients>
          <h2>Alguns clientes e parceiros</h2>
          <div className="strip mask-fade-x" aria-label="Faixa com clientes">
            <div className="track">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="logo">{c}</span>
              ))}
            </div>
          </div>
        </Clients>

        {/* TIME */}
        <Team>
          <h2>Time</h2>
          <TeamGrid>
            {team.map((m, i) => (
              <Member key={i}>
                <div className="avatar" aria-hidden>{m.initials}</div>
                <h3>{m.name}</h3>
                <p className="role">{m.role}</p>
                <p>{m.bio}</p>
              </Member>
            ))}
          </TeamGrid>
        </Team>
      </Container>
    </Page>
  );
};

export default Home;

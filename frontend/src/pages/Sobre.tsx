// src/pages/Sobre.tsx
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../assets/background-sobre.png";

/* ====== Layout base ====== */
const Page = styled.main`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)),
    url(${bgImage}) center/cover no-repeat;
  font-family: ${({ theme }) => theme.fonts.montserrat};
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 1.25rem 48px;

  @media (max-width: 768px) {
    padding: 72px 1rem 40px;
  }
  @media (max-width: 480px) {
    padding: 64px 0.9rem 32px;
  }
`;

/* ====== Hero ====== */
const Hero = styled.header`
  text-align: center;
  margin-bottom: 48px;

  h1 {
    margin: 0;
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: clamp(1.6rem, 2.6vw + 0.6rem, 2.4rem);
    color: ${({ theme }) => theme.colors.light};
    letter-spacing: 0.2px;
  }
  p {
    margin: 10px auto 0;
    max-width: 820px;
    font-size: clamp(1rem, 0.9vw + 0.7rem, 1.12rem);
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.light};
    opacity: 0.95;
    font-weight: ${({ theme }) => theme.fonts.light};
  }
`;

/* ====== Bloco de texto destacado ====== */
const IntroBlock = styled.section`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};
  border-radius: 14px;
  padding: 1.2rem 1.1rem;
  margin: 0 auto 40px;
  max-width: 920px;
  text-align: center;

  h2 {
    margin: 0 0 0.6rem 0;
    font-size: clamp(1.2rem, 1.6vw + 0.8rem, 1.7rem);
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.light};
  }
  p {
    margin: 0 auto;
    max-width: 70ch;
    font-size: clamp(0.98rem, 0.7vw + 0.68rem, 1.06rem);
    line-height: 1.75;
    font-weight: ${({ theme }) => theme.fonts.light};
    opacity: 0.95;
  }
`;

/* ====== Cards: O que fazemos ====== */
const Features = styled.section`
  margin: 40px 0 24px;
`;

const FeatureGrid = styled.div`
  display: grid;
  gap: clamp(16px, 3.2vw, 28px);
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  grid-column: span 4;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
  padding: 1rem 1rem 1.2rem;
  text-align: center;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.26);
  }

  @media (max-width: 1024px) {
    grid-column: span 4;
  }
  @media (max-width: 720px) {
    grid-column: auto;
  }

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: clamp(1.02rem, 1vw + 0.78rem, 1.28rem);
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    margin: 0 auto;
    max-width: 50ch;
    font-size: clamp(0.95rem, 0.7vw + 0.7rem, 1rem);
    line-height: 1.65;
    font-weight: ${({ theme }) => theme.fonts.light};
  }
`;

/* ====== Métricas com contadores ====== */
const Metrics = styled.section`
  margin: 28px 0 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 1rem;
`;

const MetricGrid = styled.div`
  display: grid;
  gap: clamp(14px, 2.6vw, 24px);
  grid-template-columns: repeat(12, 1fr);
  text-align: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Metric = styled.div`
  grid-column: span 4;
  padding: 0.6rem 0.5rem;

  @media (max-width: 1024px) {
    grid-column: span 4;
  }
  @media (max-width: 720px) {
    grid-column: auto;
  }

  .value {
    color: ${({ theme }) => theme.colors.light};
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: clamp(1.3rem, 2.2vw + 0.8rem, 1.8rem);
  }
  .label {
    color: ${({ theme }) => theme.colors.light};
    opacity: 0.9;
    font-size: clamp(0.92rem, 0.6vw + 0.68rem, 1rem);
    font-weight: ${({ theme }) => theme.fonts.light};
  }
`;

/* ====== Linha do tempo ====== */
const Timeline = styled.section`
  margin: 36px 0 12px;
`;

const Steps = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: clamp(14px, 2.8vw, 22px);
`;

const Step = styled.li`
  position: relative;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
  padding: 1rem 1rem 1.1rem;

  &:before {
    content: attr(data-step);
    position: absolute;
    top: -12px;
    left: -12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    color: ${({ theme }) => theme.colors.light};
    display: grid;
    place-items: center;
    font-weight: ${({ theme }) => theme.fonts.bold};
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  }

  h4 {
    margin: 0 0 0.4rem;
    font-size: clamp(1rem, 0.8vw + 0.78rem, 1.2rem);
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    margin: 0;
    font-size: clamp(0.94rem, 0.6vw + 0.7rem, 1rem);
    line-height: 1.6;
    font-weight: ${({ theme }) => theme.fonts.light};
  }
`;

/* ====== FAQ (details/summary) ====== */
const FAQ = styled.section`
  margin: 40px 0 8px;
`;

const QA = styled.details`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin-bottom: 0.8rem;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);

  summary {
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: clamp(1rem, 0.8vw + 0.78rem, 1.16rem);
    outline: none;
    list-style: none;
  }
  &[open] summary {
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0.6rem 0 0 0;
    font-size: clamp(0.94rem, 0.6vw + 0.7rem, 1rem);
    line-height: 1.6;
    font-weight: ${({ theme }) => theme.fonts.light};
  }
`;

/* ====== CTA ====== */
const CTA = styled.section`
  text-align: center;
  margin: 32px 0 8px;

  a {
    display: inline-block;
    margin-top: 12px;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fonts.bold};
    transition: transform 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    }
    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`;

/* ====== Hook simples p/ contadores ====== */
function useCountUp(
  target: number,
  startWhenVisibleRef: React.RefObject<HTMLElement>,
  durationMs = 1200
) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = startWhenVisibleRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          if (prefersReduced) {
            setValue(target);
            return;
          }

          const start = performance.now();
          const animate = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(eased * target));
            if (t < 1) {
              rafRef.current = requestAnimationFrame(animate);
            }
          };
          rafRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, startWhenVisibleRef, durationMs, prefersReduced]);

  return value;
}

/* ====== Componente ====== */
const Sobre: React.FC = () => {
  const metricsRef = useRef<HTMLDivElement>(null);

  const projetos = useCountUp(120, metricsRef); // exemplo
  const uptime = useCountUp(99, metricsRef); // 99 (vamos exibir 99,9% na label)
  const nps = useCountUp(86, metricsRef);

  return (
    <Page>
      <Container>
        <Hero>
          <h1>Quem Somos</h1>
          <p>
            A Wine Tech nasceu da ideia de que desenvolvimento é mais do que
            código. Planejamento, cuidado e domínio técnico — como a safra que
            vira um grande rótulo.
          </p>
        </Hero>

        <IntroBlock>
          <h2>Nossa Filosofia</h2>
          <p>
            A tecnologia deve se moldar ao seu negócio — não o contrário. Por
            isso, nada de soluções “de prateleira”: cada entrega é sob medida
            para seus objetivos e contexto.
          </p>
        </IntroBlock>

        <Features aria-label="O que fazemos">
          <FeatureGrid>
            <Card>
              <h3>Desenvolvimento Personalizado</h3>
              <p>
                Sistemas, plataformas e apps sob medida para otimizar operações,
                integrar times e dar visibilidade de ponta a ponta.
              </p>
            </Card>
            <Card>
              <h3>Consultoria Estratégica</h3>
              <p>
                Diagnóstico, roadmap e priorização. Escolhas técnicas alinhadas
                ao resultado que o negócio precisa alcançar.
              </p>
            </Card>
            <Card>
              <h3>Inovação Contínua</h3>
              <p>
                Evolução constante, integrações modernas e boas práticas para
                manter sua solução competitiva e segura.
              </p>
            </Card>
          </FeatureGrid>
        </Features>

        <Metrics>
          <MetricGrid ref={metricsRef}>
            <Metric>
              <div className="value">+{projetos}</div>
              <div className="label">projetos entregues</div>
            </Metric>
            <Metric>
              <div className="value">{uptime},9%</div>
              <div className="label">uptime médio das soluções</div>
            </Metric>
            <Metric>
              <div className="value">{nps}</div>
              <div className="label">NPS (satisfação dos clientes)</div>
            </Metric>
          </MetricGrid>
        </Metrics>

        <Timeline aria-label="Como trabalhamos">
          <Steps>
            <Step data-step="1">
              <h4>Descoberta</h4>
              <p>
                Imersão no seu contexto para mapear objetivos, restrições e
                oportunidades.
              </p>
            </Step>
            <Step data-step="2">
              <h4>Planejamento</h4>
              <p>
                Roadmap, arquitetura e critérios de sucesso claros — com
                prioridades certas.
              </p>
            </Step>
            <Step data-step="3">
              <h4>Execução</h4>
              <p>
                Sprints curtos, entregas frequentes e comunicação transparente.
              </p>
            </Step>
            <Step data-step="4">
              <h4>Evolução</h4>
              <p>
                Medição de resultados, otimização contínua e suporte próximo.
              </p>
            </Step>
          </Steps>
        </Timeline>

        <FAQ>
          <QA>
            <summary>Vocês trabalham com empresas de qualquer porte?</summary>
            <p>
              Sim. Adequamos escopo e modelo de trabalho para startups, PMEs e
              enterprise.
            </p>
          </QA>
          <QA>
            <summary>Como funciona o pós-entrega?</summary>
            <p>
              Oferecemos planos de suporte, monitoramento e evolução contínua
              conforme a necessidade.
            </p>
          </QA>
          <QA>
            <summary>Quais tecnologias vocês usam?</summary>
            <p>
              Selecionamos o stack conforme o caso, priorizando segurança,
              performance e manutenção.
            </p>
          </QA>
        </FAQ>

        <CTA>
          <p style={{ color: "#fff", opacity: 0.95, margin: 0 }}>
            Pronto para começar a próxima fase do seu produto?
          </p>
          <Link to="/contato" aria-label="Ir para a página de contato">
            Fale com a Wine Tech
          </Link>
        </CTA>
      </Container>
    </Page>
  );
};

export default Sobre;

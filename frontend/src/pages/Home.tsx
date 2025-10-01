import styled from "styled-components";
import logo from "../assets/logo1.png";
import destaque1 from "../assets/destaque1.png";
import bgImage from "../assets/background-tech.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  padding: 80px 1.5rem 40px;
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  z-index: 0;
  font-family: ${({ theme }) => theme.fonts.montserrat};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const Hero = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 60px;
  animation: fadeIn 1.2s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }

  h1 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  p {
    font-size: 1.15rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.light};
    font-weight: ${({ theme }) => theme.fonts.light};
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  margin: 60px 0;
  max-width: 1000px;
  flex-wrap: wrap;

  .text {
    flex: 1;
    color: ${({ theme }) => theme.colors.light};

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: ${({ theme }) => theme.fonts.bold};
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      text-align: justify;
      font-weight: ${({ theme }) => theme.fonts.light};
    }
  }

  .image {
    flex: 1;
    img {
      width: 100%;
      max-width: 320px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .image {
      order: -1;
      img {
        margin-bottom: 1.5rem;
      }
    }

    .text {
      h2 {
        font-size: 1.6rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

const Highlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  margin: 60px 0;
  max-width: 1000px;

  .card {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 300px;
    flex: 1 1 300px;
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
    animation: fadeInUp 0.8s ease forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: ${({ theme }) => theme.fonts.montserrat};

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      font-weight: ${({ theme }) => theme.fonts.bold};
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      text-align: justify;
      font-weight: ${({ theme }) => theme.fonts.light};
    }

    img {
      width: 100%;
      max-width: 280px;
      border-radius: 8px;
      margin: 1.5rem 0;
    }

    a {
      margin: 1rem auto 0;
      padding: 0.6rem 1.2rem;
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.light};
      border-radius: 6px;
      text-decoration: none;
      font-weight: ${({ theme }) => theme.fonts.bold};
      transition: background 0.3s;
      text-align: center;
      display: block;
      width: fit-content;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .card {
      max-width: 100%;
      width: 100%;
      text-align: center;

      img {
        margin: 1rem auto;
      }

      a {
        margin: 1rem auto 0;
      }
    }
  }
`;

const CTA = styled.div`
  margin-top: 60px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <Hero>
        <img src={logo} alt="Logo Wine Tech" />
        <h1>Bem-vindo à Wine Tech</h1>
        <p>
          Wine Tech: Inovação e Versatilidade em Soluções Digitais.
          <br />
          <br />
          Desenvolvimento de softwares, sistemas e sites que impulsionam o seu
          negócio, em qualquer segmento.
        </p>
      </Hero>

      <Section>
        <div className="image">
          <img src={destaque1} alt="Imagem Por que a Wine Tech" />
        </div>
        <div className="text">
          <h2>Por que a Wine Tech?</h2>
          <p>
            Da sua ideia à realidade digital.
            <br />
            <br />
            Na Wine Tech, transformamos sua visão em uma solução tecnológica
            robusta e intuitiva. Somos especialistas em desenvolver sistemas,
            sites e softwares que não apenas atendem, mas superam as suas
            expectativas.
          </p>
        </div>
      </Section>

      <Highlights>
        <div className="card">
          <h3>Soluções que Geram Resultados</h3>
          <p>
            Nossa meta não é apenas entregar um software, mas garantir um
            retorno claro sobre o seu investimento e impulsionar o crescimento
            do seu negócio.
          </p>
          <img src={destaque1} alt="Soluções que Geram Resultados" />
          <Link to="/contato">Fale Conosco</Link>
        </div>

        <div className="card">
          <h3>Expertise Multissetorial</h3>
          <p>
            Trabalhamos em diversos mercados — saúde, logística, varejo,
            educação e muitos outros. Não importa o seu nicho, temos o
            conhecimento para desenvolver a solução perfeita para você.
          </p>
          <img src={destaque1} alt="Expertise Multissetorial" />
          <Link to="/contato">Fale Conosco</Link>
        </div>

        <div className="card">
          <h3>Parceria de Longo Prazo</h3>
          <p>
            Somos seus parceiros estratégicos, não apenas fornecedores.
            Trabalhamos lado a lado com você para garantir que cada etapa do
            projeto seja um sucesso.
          </p>
          <img src={destaque1} alt="Parceria de Longo Prazo" />
          <Link to="/contato">Fale Conosco</Link>
        </div>
      </Highlights>

      <CTA>
        Entre em contato e comece a transformar o seu negócio.
        <br />
        <Link to="/contato">Fale Conosco</Link>
      </CTA>
    </Container>
  );
};

export default Home;

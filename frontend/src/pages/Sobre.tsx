import styled from "styled-components";
import bgImage from "../assets/background-sobre.png";

const SobreContainer = styled.div`
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.light};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.montserrat};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  > div {
    padding: 80px 2rem 60px;
    max-width: 900px;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.light};
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-style: italic;
    font-weight: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-weight: ${({ theme }) => theme.fonts.light};
    color: ${({ theme }) => theme.colors.text};
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
    text-align: left;

    li {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      position: relative;
      padding-left: 1.2rem;
      font-weight: ${({ theme }) => theme.fonts.light};
      color: ${({ theme }) => theme.colors.text};

      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.primary};
      }

      strong {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: ${({ theme }) => theme.fonts.bold};
        color: ${({ theme }) => theme.colors.light};
      }
    }
  }

  @media (max-width: 768px) {
    > div {
      padding: 70px 1.5rem 40px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }

    ul li {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    > div {
      padding: 60px 1rem 30px;
    }

    h1 {
      font-size: 1.6rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    p,
    ul li {
      font-size: 0.95rem;
    }
  }
`;

const Sobre = () => {
  return (
    <SobreContainer>
      <div>
        <h1>Quem Somos: A Wine Tech</h1>
        <h2>
          A Wine Tech nasceu da ideia de que o desenvolvimento de software
          deveria ser mais do que apenas código.
        </h2>
        <p>
          Inspirados pela dedicação e precisão da viticultura, transformamos a
          criação de softwares em uma arte. Para nós, cada projeto é como a
          colheita de uma safra única: exige planejamento, cuidado e um
          profundo conhecimento para produzir algo verdadeiramente
          excepcional.
        </p>

        <h2>Nossa Filosofia</h2>
        <p>
          Nossa filosofia é clara: a tecnologia deve se moldar ao seu negócio,
          e não o contrário. É por isso que não oferecemos soluções "de
          prateleira". Cada sistema que desenvolvemos é uma solução sob
          medida, construída para atender seus objetivos e desafios
          específicos.
        </p>

        <h2>O que Fazemos</h2>
        <ul>
          <li>
            <strong>Desenvolvimento Personalizado:</strong> Criamos sistemas,
            plataformas e aplicativos feitos sob medida, projetados para
            otimizar suas operações.
          </li>
          <li>
            <strong>Consultoria Estratégica:</strong> Ajudamos a identificar
            as melhores soluções tecnológicas para seu negócio, alinhando a
            tecnologia aos seus objetivos.
          </li>
          <li>
            <strong>Inovação Contínua:</strong> Mantemos você à frente da
            concorrência, integrando as mais recentes tendências e tecnologias
            do mercado.
          </li>
        </ul>
      </div>
    </SobreContainer>
  );
};

export default Sobre;

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaUser, FaEnvelope, FaCommentDots, FaWhatsapp } from "react-icons/fa";

// ANIMAÇÃO
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// CONTAINER PRINCIPAL
const Container = styled.div`
  padding: 80px 1.5rem 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 1s ease-in;
  font-family: ${({ theme }) => theme.fonts.montserrat};

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  p {
    font-size: 1.15rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    font-weight: ${({ theme }) => theme.fonts.light};

    strong {
      font-weight: ${({ theme }) => theme.fonts.bold};
      color: ${({ theme }) => theme.colors.light};
    }
  }

  a.whatsapp {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0 2rem;
    font-size: 1.1rem;
    color: #25d366;
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fonts.bold};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

// FORMULÁRIO
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  .field {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background-color: ${({ theme }) => theme.colors.input};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    padding: 0.75rem 1rem;

    svg {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 1.2rem;
    }

    input,
    textarea {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fonts.montserrat};

      &:focus {
        outline: none;
      }
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }
  }

  button {
    padding: 0.85rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    border: none;
    border-radius: 8px;
    font-weight: ${({ theme }) => theme.fonts.bold};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1.05rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    input,
    textarea,
    button {
      font-size: 0.95rem;
    }
  }
`;

// MENSAGEM DE STATUS
const StatusMessage = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "success",
})<{ success: boolean }>`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ success }) => (success ? "green" : "red")};
`;

// COMPONENTE PRINCIPAL
const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");

  const API_URL = "http://localhost:8080/api/contato";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        setStatus("Mensagem enviada com sucesso! Código 201 OK.");
        setFormData({
          nome: "",
          email: "",
          assunto: "",
          mensagem: "",
        });
      } else {
        setStatus(`Erro ao enviar. Código: ${response.status}.`);
      }
    } catch (error) {
      console.error("Erro:", error);
      setStatus("Falha na conexão com o servidor.");
    }
  };

  return (
    <Container>
      <h1>Fale Conosco</h1>
      <p>
        Vamos conversar sobre o futuro da sua empresa?
        <br />
        <strong>Email:</strong> winetech33@gmail.com
        <br />
        <strong>Telefone:</strong> (11) 95489-2095
      </p>

      <a
        className="whatsapp"
        href="https://wa.me/5511954892095"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> Fale direto pelo WhatsApp
      </a>

      <Form onSubmit={handleSubmit}>
        <div className="field">
          <FaUser />
          <input
            type="text"
            placeholder="Seu nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <FaEnvelope />
          <input
            type="email"
            placeholder="Seu e-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <FaCommentDots />
          <input
            type="text"
            placeholder="Assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <FaCommentDots />
          <textarea
            placeholder="Sua mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </Form>

      {status && (
        <StatusMessage success={status.startsWith("Mensagem")}>
          {status}
        </StatusMessage>
      )}
    </Container>
  );
};

export default Contato;

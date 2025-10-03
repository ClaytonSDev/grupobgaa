import { useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaUser, FaEnvelope, FaCommentDots, FaWhatsapp } from "react-icons/fa";

// ANIMAÇÃO (respeita prefers-reduced-motion no styled-component de Container)
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// SPINNER
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// CONTAINER PRINCIPAL
const Container = styled.section`
  --safe-left: env(safe-area-inset-left);
  --safe-right: env(safe-area-inset-right);
  --safe-top: env(safe-area-inset-top);

  padding: 80px max(16px, var(--safe-right)) 40px max(16px, var(--safe-left));
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100dvh; /* 100vh -> 100dvh para viewport móvel */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 640ms ease-out;
  font-family: ${({ theme }) => theme.fonts.montserrat};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  h1 {
    font-size: clamp(1.5rem, 2.5vw + 1rem, 2.5rem);
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  p {
    font-size: clamp(0.95rem, 1vw + 0.6rem, 1.15rem);
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
    padding: 8px 10px;
    border-radius: 8px;

    &:hover {
      text-decoration: underline;
    }
    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }
  }

  @media (max-width: 768px) {
    padding-top: calc(64px + var(--safe-top));
  }
  @media (max-width: 480px) {
    padding: calc(64px + var(--safe-top)) 1rem 32px;
  }
  @media (max-width: 360px) {
    padding: calc(56px + var(--safe-top)) 0.75rem 24px;
  }
`;

// FORMULÁRIO
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 560px;
  background-color: ${({ theme }) => theme.colors.light};
  padding: clamp(1.25rem, 3.5vw, 2rem);
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  .field {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background-color: ${({ theme }) => theme.colors.input};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    padding: 0.9rem 1rem;

    svg {
      color: ${({ theme }) => theme.colors.accent};
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    input,
    textarea {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 1rem; /* >= 16px para evitar zoom iOS */
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
    position: relative;
    padding: 0.95rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    border: none;
    border-radius: 10px;
    font-weight: ${({ theme }) => theme.fonts.bold};
    cursor: pointer;
    transition: background-color 0.3s ease, opacity 0.2s ease;
    font-size: 1.05rem;
    touch-action: manipulation;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
    &:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }

    .spinner {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      border-top-color: rgba(255, 255, 255, 1);
      border-radius: 50%;
      animation: ${spin} 0.8s linear infinite;
    }
  }
`;

// MENSAGEM DE STATUS
const StatusMessage = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "success",
})<{ success: boolean }>`
  margin-top: 1rem;
  font-size: 0.98rem;
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
  const [isLoading, setIsLoading] = useState(false);

  // Base de API por env, com fallback para localhost
  const API_URL = useMemo(() => {
    const base =
      (import.meta as any)?.env?.VITE_API_BASE_URL || "http://localhost:8080";
    return `${base.replace(/\/$/, "")}/api/contato`;
  }, []);

  // Guard para evitar múltiplos envios
  const sendingRef = useRef(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || sendingRef.current) return;

    setStatus("Enviando...");
    setIsLoading(true);
    sendingRef.current = true;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      if (response.status === 201) {
        setStatus("Mensagem enviada com sucesso! Código 201 OK.");
        setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
      } else {
        setStatus(`Erro ao enviar. Código: ${response.status}.`);
      }
    } catch (error: any) {
      if (error?.name === "AbortError") {
        setStatus("Tempo de resposta excedido. Tente novamente.");
      } else {
        console.error("Erro:", error);
        setStatus("Falha na conexão com o servidor.");
      }
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
      sendingRef.current = false;
    }
  };

  const isSuccess = status.startsWith("Mensagem");

  return (
    <Container>
      <h1>Fale Conosco</h1>
      <p>
        Vamos conversar sobre o futuro da sua empresa?
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:winetech33@gmail.com">winetech33@gmail.com</a>
        <br />
        <strong>Telefone:</strong>{" "}
        <a href="tel:+5511985492095">(11) 98549-2095</a>
      </p>

      <a
        className="whatsapp"
        href="https://wa.me/5511985492095"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale direto pelo WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" /> Fale direto pelo WhatsApp
      </a>

      {/* aria-busy deve ser string 'true' | 'false' para validar em todos os linters */}
      <Form
        onSubmit={handleSubmit}
        aria-busy={isLoading ? "true" : "false"}
        noValidate
      >
        <div className="field">
          <FaUser aria-hidden="true" />
          <input
            type="text"
            placeholder="Seu nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            autoComplete="name"
            required
            aria-label="Seu nome"
            minLength={2}
          />
        </div>
        <div className="field">
          <FaEnvelope aria-hidden="true" />
          <input
            type="email"
            placeholder="Seu e-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            inputMode="email"
            required
            aria-label="Seu e-mail"
          />
        </div>
        <div className="field">
          <FaCommentDots aria-hidden="true" />
          <input
            type="text"
            placeholder="Assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
            aria-label="Assunto"
            minLength={2}
          />
        </div>
        <div className="field">
          <FaCommentDots aria-hidden="true" />
          <textarea
            placeholder="Sua mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            aria-label="Sua mensagem"
            minLength={5}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          aria-disabled={isLoading ? "true" : "false"}
        >
          {isLoading ? "Enviando..." : "Enviar"}
          {isLoading && <span className="spinner" aria-hidden="true" />}
        </button>
      </Form>

      {status && (
        <StatusMessage success={isSuccess} role="status" aria-live="polite">
          {status}
        </StatusMessage>
      )}
    </Container>
  );
};

export default Contato;

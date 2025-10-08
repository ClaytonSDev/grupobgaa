// src/pages/Contato.tsx
import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { User, Mail, MessageSquare, Phone, Loader2, Send } from "lucide-react";

/* ===================== ESTILOS (styled-components) ===================== */

const Page = styled.section`
  background: ${({ theme }) => theme.colors.background}; /* #2f1437 */
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  min-height: 100dvh;
  display: grid;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(12px, 3vw, 24px);
`;

const Wrapper = styled.div`
  max-width: 1120px;
  margin-inline: auto;
  display: grid;
  gap: clamp(18px, 3.6vw, 32px);
  grid-template-columns: 1fr;

  @media (min-width: 960px) {
    grid-template-columns: 1.05fr 1fr; /* texto | formulário */
    align-items: start;
  }
`;

const Left = styled.div`
  text-align: center;

  @media (min-width: 960px) {
    text-align: left;
    padding-right: clamp(8px, 1.5vw, 16px);
  }
`;

const Eyebrow = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  background: ${({ theme }) => theme.colors.secondary}; /* #441f4f */
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 10px;
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: clamp(1.8rem, 3.6vw, 2.6rem);
  color: ${({ theme }) => theme.colors.light};
  line-height: 1.2;

  &::after {
    content: "";
    display: block;
    width: 72px;
    height: 3px;
    margin: 10px auto 0;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
    );
    @media (min-width: 960px) {
      margin-left: 0;
    }
  }
`;

const Subtitle = styled.p`
  margin: 12px auto 20px;
  max-width: 62ch;
  color: ${({ theme }) => theme.colors.text}; /* #bebcbf */
  font-size: clamp(1rem, 0.8vw + 0.7rem, 1.12rem);
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.fonts.light};
`;

const ContactList = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;

  @media (min-width: 960px) {
    justify-items: start;
  }
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
  padding: 10px 12px;
  border-radius: 12px;
  transition: background-color 0.18s ease, transform 0.18s ease;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.accent}; /* #4a3c50 */
    transform: translateY(-1px);
  }
`;

const WhatsAppBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
  padding: 12px 18px;
  min-width: 220px;

  border-radius: 12px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.secondary}; /* sem verde */

  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
  }
`;

const Card = styled.form`
  background: ${({ theme }) => theme.colors.card}; /* #ffffff */
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border}; /* #cccccc */
  border-radius: 16px;
  padding: clamp(16px, 2.6vw, 26px);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.25);

  display: grid;
  gap: 14px;
`;

const Field = styled.label`
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 10px;
  align-items: center;

  padding: 12px 14px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.input}; /* #fff */
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(68, 30, 80, 0.14);
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  input,
  textarea {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.montserrat};

    &::placeholder {
      color: #8e8e8e;
      opacity: 0.9;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 110px;
    line-height: 1.5;
  }
`;

const Actions = styled.div`
  display: grid;
  gap: 10px;
`;

const Submit = styled.button<{ $loading?: boolean }>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: 0;
  border-radius: 12px;
  padding: 12px 18px;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 1.06rem;

  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.primary};

  cursor: pointer;
  transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
    transform: none;
    box-shadow: none;
  }

  .spinner {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Status = styled.p<{ $ok?: boolean }>`
  margin: 2px 0 0;
  padding: 10px 12px;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;

  background: ${({ $ok, theme }) => ($ok ? theme.colors.secondary : "#5a2b65")};
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0.95;
`;

/* ===================== COMPONENTE ===================== */

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sendingRef = useRef(false);

  const API_URL = useMemo(() => {
    const base =
      (typeof process !== "undefined" && (process as any).env?.VITE_API_BASE_URL) ||
      "https://api.example.com";
    return `${String(base).replace(/\/$/, "")}/api/contato`;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || sendingRef.current) return;

    setStatus("Enviando...");
    setIsLoading(true);
    sendingRef.current = true;

    // honeypot simples (anti-bot) — mantido invisível
    const honey = (document.getElementById("company") as HTMLInputElement | null)?.value;
    if (honey) {
      setStatus("Falha na validação.");
      setIsLoading(false);
      sendingRef.current = false;
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      if (res.ok || res.status === 201) {
        setStatus("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
      } else {
        let detail = res.statusText || `Código: ${res.status}`;
        try {
          const j = await res.json();
          detail = j?.message || detail;
        } catch {}
        setStatus(`Erro ao enviar: ${detail}.`);
      }
    } catch (err: any) {
      if (err?.name === "AbortError") {
        setStatus("Tempo de resposta excedido (timeout). Tente novamente.");
      } else {
        console.error(err);
        setStatus("Falha na conexão com o servidor.");
      }
    } finally {
      clearTimeout(timeoutId);
      setIsLoading(false);
      sendingRef.current = false;
    }
  };

  const isSuccess = status.startsWith("Mensagem enviada");

  return (
    <Page id="contato" aria-label="Seção de Contato">
      <Wrapper>
        {/* Lado esquerdo: título + contatos + WhatsApp */}
        <Left>
          <Eyebrow>Contato</Eyebrow>
          <Title>Vamos conversar sobre o futuro da sua empresa?</Title>
          <Subtitle>
            Preencha o formulário ou, se preferir, fale direto pelos nossos canais.
            Respondemos rápido e com objetividade.
          </Subtitle>

          <ContactList>
            <ContactLink href="mailto:winetech33@gmail.com" aria-label="Envie um e-mail para winetech33@gmail.com">
              <Mail /> winetech33@gmail.com
            </ContactLink>
            <ContactLink href="tel:+5511985492095" aria-label="Ligue para (11) 98549-2095">
              <Phone /> (11) 98549-2095
            </ContactLink>

            <WhatsAppBtn
              href="https://wa.me/5511985492095"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale direto pelo WhatsApp"
            >
              <Phone size={18} aria-hidden /> Fale no WhatsApp
            </WhatsAppBtn>
          </ContactList>
        </Left>

        {/* Formulário */}
        <Card onSubmit={handleSubmit} noValidate aria-busy={isLoading ? "true" : "false"}>
          {/* Honeypot (escondido a leitores) */}
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-5000px", opacity: 0, width: 1, height: 1 }}
            aria-hidden="true"
          />

          <Field>
            <User aria-hidden />
            <input
              type="text"
              placeholder="Seu nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              autoComplete="name"
              minLength={2}
              required
              aria-label="Seu nome"
            />
          </Field>

          <Field>
            <Mail aria-hidden />
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
          </Field>

          <Field>
            <MessageSquare aria-hidden />
            <input
              type="text"
              placeholder="Assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              minLength={2}
              required
              aria-label="Assunto"
            />
          </Field>

          <Field>
            <MessageSquare aria-hidden />
            <textarea
              placeholder="Sua mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              minLength={5}
              required
              aria-label="Sua mensagem"
              rows={5}
            />
          </Field>

          <Actions>
            <Submit type="submit" disabled={isLoading} $loading={isLoading}>
              {isLoading ? "Enviando..." : "Enviar"}
              {isLoading ? (
                <Loader2 className="spinner" size={18} aria-hidden />
              ) : (
                <Send size={18} aria-hidden />
              )}
            </Submit>

            {status && <Status $ok={isSuccess} role="status" aria-live="polite">{status}</Status>}
          </Actions>
        </Card>
      </Wrapper>
    </Page>
  );
};

export default Contato;

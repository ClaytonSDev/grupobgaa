import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../contexts/UserContext";

const Container = styled.section`
  --safe-left: env(safe-area-inset-left);
  --safe-right: env(safe-area-inset-right);
  --safe-top: env(safe-area-inset-top);
  --safe-bottom: env(safe-area-inset-bottom);

  display: grid;
  place-items: center;
  padding: max(16px, var(--safe-top)) max(16px, var(--safe-right))
    max(16px, var(--safe-bottom)) max(16px, var(--safe-left));
  min-height: 100dvh; /* corrige salto da barra no mobile */
  background-color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.montserrat};
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: clamp(16px, 4.5vw, 32px);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 420px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: clamp(1.4rem, 2.2vw + 0.8rem, 1.8rem);
`;

const Form = styled.form`
  display: grid;
  gap: 12px;
  width: 100%;
`;

const Field = styled.div`
  text-align: left;
  display: grid;
  gap: 6px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
`;

const InputWrap = styled.div`
  position: relative;
`;

const Input = styled.input<{ $invalid?: boolean }>`
  width: 100%;
  padding: 0.8rem 0.9rem;
  border: 1px solid
    ${({ theme, $invalid }) =>
      $invalid ? theme.colors.accent : theme.colors.border};
  border-radius: 8px;
  font-size: 1rem; /* >=16px evita zoom iOS */
  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fonts.light};
  transition: border 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

const TogglePw = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 0;
  color: ${({ theme }) => theme.colors.light};
  font-size: 0.9rem;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 6px;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.light};
    outline-offset: 2px;
  }
`;

const Button = styled.button`
  margin-top: 6px;
  padding: 0.85rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  transition: background 0.2s ease, transform 0.12s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ForgotLink = styled(Link)`
  margin-top: 0.8rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailInvalid = submitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const pwInvalid = submitted && password.length < 4;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (emailInvalid || pwInvalid) return;

    const userData = { name: "Clayton", email };
    login(userData);
    navigate("/");
  };

  return (
    <Container>
      <Card role="form" aria-labelledby="login-title">
        <Title id="login-title">Área do Cliente</Title>
        <Form onSubmit={handleSubmit} noValidate>
          <Field>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              inputMode="email"
              aria-invalid={emailInvalid}
              $invalid={emailInvalid}
              required
            />
          </Field>

          <Field>
            <Label htmlFor="password">Senha</Label>
            <InputWrap>
              <Input
                id="password"
                type={showPw ? "text" : "password"}
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                aria-invalid={pwInvalid}
                $invalid={pwInvalid}
                required
              />
              <TogglePw
                type="button"
                onClick={() => setShowPw((v) => !v)}
                aria-pressed={showPw}
                aria-label={showPw ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPw ? "Ocultar" : "Mostrar"}
              </TogglePw>
            </InputWrap>
          </Field>

          <Button type="submit" disabled={!email || !password}>
            Entrar
          </Button>
        </Form>
        <ForgotLink to="/recuperar-senha">Esqueceu a senha?</ForgotLink>
      </Card>
    </Container>
  );
};

export default Login;

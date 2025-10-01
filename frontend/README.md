# 📦 Wine Tech Frontend

**Wine Tech** é uma plataforma tecnológica multivertente desenvolvida com foco em inovação, escalabilidade e experiência do usuário. Este repositório contém o frontend da aplicação, construído com **React**, **TypeScript**, **Vite** e **Styled Components**.

---

## 🚀 Tecnologias Utilizadas

- **React 19** – Biblioteca principal para construção da interface
- **TypeScript** – Tipagem estática para maior segurança e produtividade
- **Vite** – Bundler moderno e rápido para desenvolvimento e build
- **Styled Components** – Estilização com CSS-in-JS
- **React Router DOM** – Navegação entre páginas
- **Axios** – Requisições HTTP
- **Tailwind (opcional)** – Utilitários de estilo
- **ESLint + Prettier** – Padronização e qualidade de código

---

## 📁 Estrutura de Pastas

```plaintext
src/
├── assets/           # Imagens e ícones
├── components/       # Componentes reutilizáveis (Navbar, Footer, etc.)
├── contexts/         # Contextos globais (ex: autenticação)
├── features/         # Funcionalidades específicas por vertical
├── hooks/            # Custom hooks
├── pages/            # Páginas principais (Home, Login, Contato, etc.)
├── services/         # Integração com APIs (axios)
├── styles/           # Estilos globais e tema
├── types/            # Tipos e interfaces TypeScript
├── App.tsx           # Componente raiz
└── main.tsx          # Ponto de entrada da aplicação
```

---

## 🧪 Como rodar o projeto localmente

### Pré-requisitos

- Node.js 18+
- NPM ou Yarn
- Git

### Instalação

```bash
git clone https://github.com/SEU_USUARIO/wine-tech.git
cd wine-tech/frontend
npm install
```

### Execução

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

---

## 🔐 Autenticação

O projeto utiliza um sistema de autenticação baseado em **JWT**, integrado com o backend Java (Spring Boot). O estado do usuário é gerenciado via `UserContext`, permitindo exibir conteúdo personalizado e proteger rotas.

---

## 📡 Integração com Backend

O frontend se comunica com o backend via `axios`, utilizando o endpoint:

```
http://localhost:8080/api/auth/login
```

> ⚠️ Certifique-se de que o backend esteja rodando e que o CORS esteja habilitado.

---

## 🧠 Funcionalidades em destaque

- Menu mobile inteligente com fechamento automático
- Página Home com conteúdo dinâmico para usuários logados
- Tela de login integrada ao contexto global
- Estrutura escalável para múltiplas verticais (EduTech, AgroTech, etc.)
- Estilização responsiva e animada

---

## 📌 Próximos passos

- Integração com PostgreSQL via backend Java
- Criação de dashboard personalizado por usuário
- Proteção de rotas privadas
- Sistema de notificações e histórico de atividades

---

## ⚙️ Configuração Técnica Avançada

Este projeto utiliza uma configuração mínima para rodar React com Vite e HMR, além de regras de ESLint otimizadas.

### Plugins oficiais disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

---

### 🔍 Expanding the ESLint configuration

Para aplicações em produção, recomenda-se ativar regras de lint com verificação de tipos:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

Você também pode instalar:

- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

```js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      reactX.configs["recommended-typescript"],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias. Este projeto está em constante evolução.

---

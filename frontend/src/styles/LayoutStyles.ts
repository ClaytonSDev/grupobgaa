// src/styles/LayoutStyles.ts
import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: calc(100vh - 160px); // ajusta altura considerando navbar + footer
`;

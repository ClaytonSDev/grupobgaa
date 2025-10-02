import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import axios from "axios";

const Container = styled.div`
  padding: 80px 1.5rem 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.montserrat};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  margin-bottom: 2rem;
`;

const Indicadores = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Indicador = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fonts.light};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.3rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
  }
`;

const InputBusca = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Dashboard = () => {
  const [dadosFinanceiros, setDadosFinanceiros] = useState([]);
  const [mensagens, setMensagens] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/financeiro")
      .then((res) => setDadosFinanceiros(res.data))
      .catch((err) => console.error("Erro ao buscar dados financeiros:", err));

    axios
      .get("http://localhost:8080/api/contato/todos")
      .then((res) => setMensagens(res.data))
      .catch((err) => console.error("Erro ao buscar mensagens:", err));
  }, []);

  const mensagensFiltradas = mensagens.filter(
    (msg) =>
      msg.nome.toLowerCase().includes(busca.toLowerCase()) ||
      msg.assunto.toLowerCase().includes(busca.toLowerCase())
  );

  const totalFaturado = dadosFinanceiros.reduce(
    (acc, p) => acc + p.faturamento,
    0
  );

  return (
    <Container>
      <Title>Painel Administrativo - Wine Tech</Title>

      <Indicadores>
        <Indicador>💰 Total Faturado: R$ {totalFaturado.toFixed(2)}</Indicador>
        <Indicador>📨 Mensagens: {mensagens.length}</Indicador>
        <Indicador>👥 Equipe Ativa: 4</Indicador>
      </Indicadores>

      <Grid>
        <Card>
          <h2>📊 Faturamento por Projeto</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dadosFinanceiros}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="projeto" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="faturamento" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <h2>📥 Mensagens Recebidas</h2>
          <InputBusca
            type="text"
            placeholder="Buscar por nome ou assunto"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <ul>
            {mensagensFiltradas.map((msg) => (
              <li key={msg.id}>
                <strong>{msg.nome}</strong> ({msg.email}) —{" "}
                <em>{msg.assunto}</em>
                <br />
                <span>{msg.mensagem}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2>📅 Agenda de Entregas</h2>
          <ul>
            <li>Projeto ERP - entrega: 30/09</li>
            <li>Reunião com cliente: 25/09 às 14h</li>
            <li>Milestone CRM: 05/10</li>
          </ul>
        </Card>

        <Card>
          <h2>👥 Equipe e Alocação</h2>
          <ul>
            <li>Lucas - Projeto ERP</li>
            <li>Fernanda - CRM + Suporte</li>
            <li>João - Infraestrutura</li>
            <li>Disponível: Mariana</li>
          </ul>
        </Card>

        <Card>
          <h2>⚠️ Alertas de Risco</h2>
          <ul>
            <li>Projeto CRM com atraso de 5 dias</li>
            <li>Cliente TechNova inativo há 60 dias</li>
            <li>Falha técnica no servidor Azure</li>
          </ul>
        </Card>
      </Grid>
    </Container>
  );
};

export default Dashboard;

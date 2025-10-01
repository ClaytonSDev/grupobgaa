import { useState } from "react";
import styled from "styled-components";
import destaque1 from "../assets/destaque1.png";

const Container = styled.div`
  padding: 80px 1.5rem 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.montserrat};

  h1 {
    color: ${({ theme }) => theme.colors.light};
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: ${({ theme }) => theme.fonts.bold};
  }

  p.intro {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    font-weight: ${({ theme }) => theme.fonts.light};
  }

  .servicos-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .servico-item {
    background-color: ${({ theme }) => theme.colors.card};
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s ease;
  }

  .servico-item:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  .servico-titulo {
    background: none;
    border: none;
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    margin-bottom: 1rem;
    text-align: center;
    width: 100%;
    transition: color 0.3s ease;
    font-family: ${({ theme }) => theme.fonts.montserrat};
  }

  .servico-titulo:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  .detalhes {
    margin-top: 0.5rem;

    p {
      font-size: 1rem;
      line-height: 1.6;
      white-space: pre-line;
      color: ${({ theme }) => theme.colors.background};
      font-weight: ${({ theme }) => theme.fonts.light};
    }

    img {
      width: 100%;
      max-width: 600px;
      border-radius: 8px;
      margin-top: 1rem;
      display: block;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.6rem;
    }

    p.intro {
      font-size: 1rem;
    }

    .servico-titulo {
      font-size: 1.2rem;
    }

    .detalhes p {
      font-size: 0.95rem;
    }
  }
`;

const servicos = [
  {
    titulo: "Desenvolvimento de sistemas personalizados",
    descricao: `A sua empresa tem desafios únicos e precisa de soluções que se encaixem perfeitamente na sua operação Em vez de se adaptar a softwares genéricos, nossos sistemas e softwares personalizados são feitos sob medida para o seu negócio.

Mais do que ferramentas: soluções que transformam sua empresa.
Criamos sistemas robustos para atender às suas necessidades específicas, seja para otimizar processos internos, melhorar a gestão da produção, ou ter controle total sobre o estoque. Nossas soluções vão além das funcionalidades básicas, trazendo benefícios estratégicos:

• Produtividade e Eficiência: Automatize tarefas repetitivas e manuais para que sua equipe possa focar em atividades mais estratégicas e que geram mais valor para o negócio. Isso reduz erros e retrabalho, liberando tempo para o que realmente importa.

• Integração e Centralização: Chega de ter informações espalhadas em diferentes sistemas que não se comunicam. Com uma solução personalizada, você centraliza todos os dados e processos em um único lugar, facilitando a tomada de decisões e garantindo que as informações fluam de forma unificada entre os setores.

• Escalabilidade e Crescimento: Seu negócio está em constante evolução, e a sua tecnologia deve acompanhar esse ritmo. Nossos sistemas são projetados para crescer com você, permitindo a inclusão de novas funcionalidades e a adaptação a futuras demandas do mercado sem a necessidade de uma migração radical.

• Segurança e Controle: Softwares prontos podem ser alvos mais comuns de ataques cibernéticos. Com uma solução sob medida, você tem total controle sobre a segurança dos dados. Implementamos medidas de segurança específicas para proteger as informações sensíveis da sua empresa.

• Vantagem Competitiva: Um software que atende com precisão as particularidades do seu fluxo de trabalho não apenas otimiza a operação, mas também cria um diferencial no mercado, permitindo que você ofereça um serviço mais ágil e personalizado aos seus clientes.

Nossa equipe está pronta para entender os seus desafios e desenvolver uma tecnologia que seja a base para o sucesso do seu negócio.

Quer saber como uma solução sob medida pode alavancar a sua empresa? Entre em contato e vamos conversar sobre o seu projeto!`,
  },
  {
    titulo: "Desenvolvimento de Sites e E-commerce",
    descricao: `Mais do que uma página na internet, seu site é a vitrine do seu negócio no mundo digital. Nós construímos uma presença digital sólida, pensada para converter visitantes em clientes e oferecer a melhor experiência de navegação.

Seja para um site institucional que transmita credibilidade e profissionalismo, ou para um e-commerce robusto que funcione como sua principal ferramenta de vendas, nossa abordagem é estratégica e focada em resultados.

Criação de Sites que geram resultados
Nossos projetos são desenvolvidos com as mais recentes tecnologias e práticas de mercado, garantindo que seu site seja:

• Otimizado para Conversão: Cada elemento é pensado para guiar o usuário a uma ação, seja preencher um formulário de contato, solicitar um orçamento ou finalizar uma compra.

• Responsivo e Acessível: Seu site terá uma navegação impecável em qualquer dispositivo — computadores, tablets ou celulares —, proporcionando uma experiência fluida para todos os usuários.

• Velocidade e Desempenho: Sites rápidos retêm mais visitantes e melhoram o ranqueamento no Google. Priorizamos a performance para garantir que sua página carregue em segundos.

• Seguro e Confiável: Implementamos protocolos de segurança rigorosos para proteger os dados do seu negócio e de seus clientes, construindo a confiança necessária para o seu sucesso online.

E-commerce: A sua loja virtual de alta performance
Transformamos sua ideia de loja online em uma realidade lucrativa, com foco em:

• Jornada do Cliente: Desenhamos um fluxo de compra intuitivo e simplificado, desde a busca pelo produto até a finalização do pedido, para reduzir o abandono de carrinho.

• Gestão de Produtos e Estoque: Ferramentas fáceis de usar que permitem gerenciar seu catálogo de produtos, preços, promoções e controle de estoque de forma eficiente.

• Integração com Meios de Pagamento: Conectamos sua loja com os principais gateways de pagamento e soluções logísticas, oferecendo conveniência e segurança nas transações.

• Análise de Dados: Você terá acesso a relatórios detalhados para entender o comportamento dos seus clientes, quais produtos vendem mais e como otimizar suas estratégias de vendas.

Nossa equipe está pronta para transformar sua presença digital em uma máquina de vendas. Que tipo de projeto você tem em mente?`,
  },
  {
    titulo: "Infraestrutura de TI e Cloud",
    descricao: `Em um mundo digital, a base do seu negócio é a infraestrutura de TI. É ela que garante que seus sistemas funcionem, seus dados estejam seguros e sua equipe possa trabalhar sem interrupções.

Nós cuidamos dessa base para que você possa focar no crescimento da sua empresa. Nossas soluções de infraestrutura de TI e Cloud são projetadas para modernizar sua operação, aumentar a segurança e otimizar custos.

Serviços de Infraestrutura e Cloud que transformam seu negócio
Oferecemos uma gama completa de serviços para criar e gerenciar uma infraestrutura de TI robusta, escalável e segura:

• Migração e Gerenciamento de Cloud: Leve sua operação para a nuvem. Migramos seus dados e sistemas para plataformas como Amazon Web Services (AWS), Google Cloud ou Microsoft Azure. Gerenciamos tudo para você, garantindo que a infraestrutura seja eficiente e que você pague apenas pelo que usa.

• Servidores e Data Centers: Seja em ambiente físico ou virtual, cuidamos da instalação, configuração e manutenção de servidores, garantindo alta disponibilidade e desempenho para suas aplicações.

• Redes e Conectividade: Desenhamos e implementamos redes internas e externas para garantir uma comunicação rápida e segura entre sua equipe e seus clientes.

• Segurança Cibernética: Protegemos sua empresa contra ameaças digitais com firewalls, sistemas de detecção de intrusos e outras medidas de segurança. Seus dados estarão seguros e você terá tranquilidade para focar no que realmente importa.

• Backup e Recuperação de Desastres: Desenvolvemos estratégias de backup para proteger seus dados contra perdas inesperadas. Com planos de recuperação de desastres, garantimos que sua empresa possa voltar a operar rapidamente em caso de falhas críticas.

• Suporte Técnico Especializado: Sua equipe terá acesso a um suporte técnico proativo para resolver problemas rapidamente e evitar que pequenos imprevistos se tornem grandes dores de cabeça.

Uma infraestrutura de TI bem planejada é a chave para a inovação e o crescimento. Está pronto para levar a sua infraestrutura para o próximo nível?`,
  },
  {
    titulo: "Consultoria em Transformação Digital",
    descricao: `A transformação digital não é apenas sobre tecnologia; é sobre repensar a sua empresa para o futuro. Vivemos em um mundo onde a tecnologia avança rapidamente, e as empresas que não se adaptam correm o risco de ficar para trás.

Nossa consultoria em transformação digital é o seu guia nessa jornada. Ajudamos sua empresa a adotar tecnologias e estratégias inovadoras para otimizar processos, melhorar a experiência do cliente e abrir novas oportunidades de negócio.

Como nossa consultoria pode impulsionar sua empresa
Trabalhamos lado a lado com sua equipe para entender seus desafios e metas. Nossa abordagem é estratégica e focada em resultados práticos:

• Mapeamento e Diagnóstico: Analisamos sua operação atual para identificar gargalos e oportunidades. Entendemos quais tecnologias podem trazer o maior retorno sobre o investimento para o seu negócio.

• Planejamento Estratégico: Criamos um roteiro detalhado para a sua transformação. Definimos as tecnologias a serem implementadas, o cronograma do projeto e como treinar sua equipe para a mudança.

• Implementação de Soluções: Ajudamos na escolha e na implementação de soluções digitais sob medida, seja para automatizar tarefas com Inteligência Artificial, otimizar a comunicação com um sistema de CRM, ou criar uma plataforma de e-commerce para expandir seus canais de venda.

• Cultura e Capacitação: A mudança começa de dentro. Oferecemos treinamentos e workshops para que sua equipe abrace a nova cultura digital e utilize as ferramentas de forma eficaz.

• Análise de Dados: Usamos a análise de dados para monitorar o progresso, identificar tendências e tomar decisões mais inteligentes, garantindo que a sua transformação digital continue gerando valor a longo prazo.

A transformação digital é uma jornada contínua, e estamos aqui para garantir que ela seja bem-sucedida. Pronto para iniciar a sua?`,
  },
  {
    titulo: "Monitoramento Inteligente e Automação",
    descricao: `Você precisa de mais do que dados; você precisa de inteligência para agir. Nossas soluções de monitoramento inteligente e automação transformam a forma como sua empresa opera.

Em vez de apenas observar o que acontece, nós ajudamos você a prever problemas, reagir instantaneamente e otimizar processos de forma proativa. O resultado é um ambiente de trabalho mais eficiente, com menos erros e mais tempo para sua equipe focar em tarefas estratégicas.

Da supervisão manual à inteligência de dados
Nossos serviços de monitoramento e automação vão muito além de simples alertas. Eles criam um sistema de inteligência que aprende com os dados e toma ações por conta própria, melhorando a operação continuamente:

• Detecção Proativa de Falhas: Receba alertas em tempo real sobre anomalias no seu sistema, servidores ou rede. Em vez de esperar que um problema afete a sua operação, nós o identificamos antes que ele se torne crítico.

• Automação de Tarefas Repetitivas: Automatizamos processos manuais e demorados, como a criação de relatórios, o envio de e-mails de notificação, ou a reinicialização de um servidor. Isso economiza tempo da sua equipe e reduz a chance de erros humanos.

• Análise Preditiva: Com o uso de inteligência artificial, analisamos padrões nos seus dados para prever quando a manutenção de um equipamento será necessária ou quando o desempenho de um sistema pode cair.

• Otimização Contínua: O sistema não apenas monitora, ele também sugere melhorias e otimizações. Com a automação, ele pode até mesmo ajustar configurações automaticamente para garantir a máxima performance.

Com a nossa solução, sua empresa ganha agilidade, confiabilidade e a capacidade de operar em um novo nível de eficiência. Está pronto para otimizar a sua operação?`,
  },
  {
    titulo: "Integração de Dados e Segurança da Informação",
    descricao: `Em um mundo onde os dados são o ativo mais valioso de uma empresa, garantir que eles estejam integrados e, acima de tudo, seguros, é fundamental para a sobrevivência e o crescimento do seu negócio.

Nossas soluções de integração de dados e segurança da informação são projetadas para que você tenha um fluxo de trabalho unificado, eficiente e protegido contra qualquer ameaça digital.

Integração de Dados: Conecte o que está desconectado
Muitas empresas operam com informações espalhadas em diferentes sistemas, planilhas e plataformas, o que gera inconsistência e retrabalho. Nossa abordagem resolve esse problema, permitindo que você:

• Centralize Informações: Crie uma fonte única e confiável para todos os seus dados. Unificamos informações de diferentes departamentos (vendas, marketing, financeiro) para que a sua equipe tenha uma visão completa e atualizada da operação.

• Automatize Fluxos de Trabalho: Conecte seus sistemas (CRM, ERP, e-commerce) para que eles "conversem" entre si. Quando uma venda é concluída na sua loja virtual, por exemplo, o sistema de estoque pode ser atualizado automaticamente.

• Tome Decisões Mais Inteligentes: Com todos os dados integrados, a análise se torna mais fácil e precisa. Você pode identificar tendências, entender o comportamento do cliente e tomar decisões estratégicas com base em informações concretas, não em suposições.

Segurança da Informação: Proteja o que é seu
A segurança não é um luxo, mas uma necessidade. Nossas soluções de segurança da informação são completas e proativas, garantindo que o seu negócio esteja protegido contra ataques, vazamentos e perdas de dados:

• Proteção Cibernética: Implementamos barreiras de segurança robustas como firewalls, antivírus avançados e sistemas de detecção de intrusões para defender sua rede contra ameaças externas.

• Conformidade e Governança: Ajudamos sua empresa a se adequar a regulamentações como a LGPD, garantindo que você esteja em conformidade com as leis de proteção de dados.

• Backup e Recuperação de Desastres: Criamos planos de backup automatizados e testados para que, em caso de falha de sistema, ataque cibernético ou desastre natural, seus dados possam ser recuperados rapidamente, minimizando o tempo de inatividade e os prejuízos.

Com a nossa ajuda, seus dados estarão organizados, acessíveis e, mais importante, totalmente seguros.`,
  },
];

const Servicos = () => {
  const [selecionado, setSelecionado] = useState<number | null>(null);

  const toggleServico = (index: number) => {
    setSelecionado((prev) => (prev === index ? null : index));
  };

  return (
    <Container>
      <h1>Soluções Tecnológicas que se Adaptam a Você.</h1>
      <p className="intro">
        Na Wine Tech, entregamos soluções completas, não apenas código. Nossos
        serviços são pensados para levar o seu negócio ao próximo nível de
        eficiência e competitividade, independentemente do seu setor.
      </p>

      <div className="servicos-grid">
        {servicos.map((servico, index) => (
          <div key={index} className="servico-item">
            <button
              onClick={() => toggleServico(index)}
              className="servico-titulo"
            >
              {servico.titulo}
            </button>
            {selecionado === index && (
              <div className="detalhes">
                <p>{servico.descricao}</p>
                <img src={destaque1} alt="Imagem ilustrativa do serviço" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Servicos;

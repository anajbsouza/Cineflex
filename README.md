# Cineflex

Este projeto é uma aplicação de front-end que tem como objetivo simular a compra de ingressos de um cinema.

# Demo
[]()

# Como funciona?

O usuário acessa a página inicial que fornece um catálogo de filmes. Ele deverá escolher qual filme deseja assistir, o dia e o horário. Por fim, fornecerá dados (nome e CPF) para realizar a transação e adquirir o ingresso.

Para entidade, foram criadas cinco rotas:

- **`/`:** Página principal que mostra o catálogo de filmes.
- **`/sessoes/:idFilme`:** Mostra os horários disponíveis do filme selecionado.
- **`/assentos/:idSessao`:** Mostra os assentos disponíveis da sessão escolhida, além do formulário pra  preencher e reservar o assento.
- **`/sucesso`:** Retorna os dados da sessão e do usuário.


# Tecnologias utilizadas
Para este projeto, foram utilizadas as seguintes tecnologias:

- React com Vite;
- Styled Components para estilização;
- Axios para as requisições


# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

- Clonar o repositório;
- Baixar as dependências necessárias com o comando: `npm install`;
- Em seguida, criar o arquivo `.env` com base no `.env.example`;
- Para rodar o projeto em desenvolvimento, execute o comando `npm run dev`;
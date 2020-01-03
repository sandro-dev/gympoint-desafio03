<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 3: Gympoint - Continuação
</h3>

<blockquote align="center">“Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu. (Eclesiastes 3:1)”</blockquote>

## Sobre o desafio

Nesse desafio, está sendo desenvolvido o **Gympoint** - App gerenciador de academia.
O projeto será desenvolvido aos poucos até o fim do treinamento, quando teremos uma solução completa envolvendo back-end, front-end e mobile, e que será utilizada para a certificação do bootcamp.

### Um pouco sobre as ferramentas

- Express
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize, Migrations e Seeds
- PostgreSQL
- Bcrypt
- JWT (JSON Web Token)

### Funcionalidades

#### 1. Autenticação

- O usuário pode se autenticar utilizando e-mail e uma senha;
- A autenticação está sendo feita utilizando JWT;
- Há validação dos dados de entrada, para criar ou editar um usuário;

#### 2. Cadastro de alunos

- Foi criada uma nova tabela no banco de dados chamada `students`;
- Os alunos são mantidos (cadastrados/atualizados) na aplicação utilizando `nome, email, idade, peso e altura`;
- É feita uma verificação antes de inserir um aluno, se o usuário autenticado durante a inserção é administrador;
- O aluno não se autentica no sistema, ou seja, não possui senha.


# Comandos

- `yarn add`: para adicionar as dependências do projeto
- `yarn dev`: para executar o servidor
- `yarn queue`: para executar o servidor que processa as filas


## Licença

Esse projeto está sob a licença MIT.

---
Código Desenvolvido por Sandro Santos - Referente ao desáfio 02 do treinamento GoStack


# TODO
- students email -> corrigir unique
- corrigir isAdmin



[OK] Crie uma rota para o aluno cadastrar pedidos de auxílio apenas informando seu ID de cadastro (ID do banco de dados);
`Exemplo de requisição: POST https://gympoint.com/students/3/help-orders`

[OK] Crie uma rota para listar todos pedidos de auxílio de um usuário com base em seu ID de cadastro;
`Exemplo de requisição: GET https://gympoint.com/students/3/help-orders`

[OK] Crie uma rota para a academia listar todos pedidos de auxílio sem resposta;

[OK] Crie uma rota para a academia responder um pedido de auxílio:
`Exemplo de requisição: POST https://gympoint.com/help-orders/1/answer`

[OK] Quando um pedido de auxílio for respondido, o aluno deve receber um e-mail da plataforma com a pergunta e resposta da academia;

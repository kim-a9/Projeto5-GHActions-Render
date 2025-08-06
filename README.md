# 📚 Biblioteca API - Gerenciamento de Livros
=====================================
Essa é uma API simples e eficiente para gerenciamento de livros em uma biblioteca. O projeto foi desenvolvido com TypeScript, Express, e tem integração com MongoDB. Foi estruturado utilizando os princípios da Clean Architecture para garantir organização e escalabilidade do código.
=====================================


## 📌 Objetivo
Permitir operações CRUD (Create, Read, Update, Delete) em registros de livros, com segurança, identificadores únicos e facilidade de testes e manutenção.


🛠️ Tecnologias Utilizadas
- TypeScript
- Express.js
- MongoDB – Banco de dados utilizado na aplicação
- Mongoose – Biblioteca para integração com o banco de dados
- Thunder Client – Testes rápidos no VS Code
- JWT (JSON Web Token) – Autenticação segura
- GitHub Actions – Integração e entrega contínua (CI/CD)
- Render – Plataforma de deploy da aplicação

## 🔐 Autenticação
A API agora conta com autenticação baseada em JWT. Para acessar os endpoints protegidos, é necessário incluir um token válido no cabeçalho da requisição:

Authorization: Bearer <seu_token_jwt>


## 🚀 Deploy
A aplicação está hospedada na plataforma Render, permitindo acesso público e escalabilidade automática.

⚙️ Pré-requisitos
Antes de iniciar o projeto, garanta que você tenha:
- Node.js (versão 16 ou superior)
- npm (instalado com o Node.js)
- Thunder Client ou Postman para testar os endpoints
- MongoDB local ou instância na nuvem (ex: MongoDB Atlas)
📫 Endpoints Principais
| Método | Endpoint | Descrição | Autenticação | 
| GET | /books | Listar todos os livros | ❌ | 
| GET | /books/:id | Consultar um livro específico | ❌ | 
| POST | /books | Criar um novo livro | ✅ | 
| PATCH | /books/:id | Atualizar um livro | ✅ | 
| DELETE | /books/:id | Remover um livro | ✅ | 


## 📁 Estrutura de Pastas (Clean Architecture)
```markdown
src/
│ ├── main.ts                 
│ ├── app/
│ │     ├── controller/       
│ │     └── routes/            
│ ├── core/
│ │     ├── entities/
│ │     ├── repository/
│ │     └── usecases/
│ ├── infra/
│ │     ├── database/
│ │     ├── server/
│ │     └── auth/              # Novo módulo de autenticação
│ └── tests/
│       ├── unit/
│       └── integration/ 
├── .github/                  # Configuração do GitHub Actions
│   └── workflows/
│       └── deploy.yml
│
├── render.yaml
├── .gitignore
├── package.json
└── tsconfig.json
```


## 🚀 Instalação e Execução
### Clone o repositório
```console
git clone https://github.com/kim-a9/Projeto5-GHActions-Render.git

```
###  Acesse a pasta do projeto
```console
cd https://github.com/kim-a9/Projeto5-GHActions-Render.git

```
###  Instale as dependências
```console
npm install

```
```console
npm run build

```
###  Inicie o servidor
```console
npm start

```

# 🧪 Testando a API
1. Adicionar um novo livro (POST)
`POST http://localhost:3000/books
`

EXEMPLO:
```json
[
  {
    "title": "Quarto de Despejo",
    "author": "Carolina Maria de Jesus",
    "genre": "diario"
  }
  ```
  ```json
  {
    "title": "Um defeito de cor",
    "author": "Ana Maria Gonçalves",
    "genre": "romance"
  }
]
```
```json
{
  "title": "Insubmissas Lágrimas de Mulheres",
  "author": "Conceição Evaristo",
  "genre": "romance"
}
```
```json
{
  "title": "Livro 1",
  "author": "Autor 1",
  "genre": "Genero"
}
```

2. Listar livro por ID (GET)
`GET http://localhost:3000/books/:id
`
Resposta:
```json
{
  "title": "Livro 1",
  "author": "Autor 1",
  "genre": "Genero"
}
```
3. Atualizar livro por ID (PATCH)
`PATCH http://localhost:3000/books/:id
`
Exemplo do body enviado:
```json
{
  "title": "Torto Arado",
  "author": "Itamar Vieira Junior",
  "genre": "romance"
}
```
3. Deletar livro (DELETE)
`DELETE http://localhost:3000/books/:id
`


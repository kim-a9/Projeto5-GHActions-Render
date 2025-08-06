# 📚 Biblioteca API - Gerenciamento de Livros

Essa é uma API simples e eficiente para gerenciamento de livros em uma biblioteca. O projeto foi desenvolvido com TypeScript, Express, e tem integração com MongoDB. Foi estruturado utilizando os princípios da Clean Architecture para garantir organização e escalabilidade do código.

## 📌 Objetivo
Permitir operações CRUD (Create, Read, Update, Delete) em registros de livros, com segurança, identificadores únicos e facilidade de testes e manutenção.


## 🛠️ Tecnologias Utilizadas
- TypeScript
- Express.js
- MongoDB – Banco de dados utilizado na aplicação
- Mongoose – Biblioteca para integração com o banco de dados
- Thunder Client – Testes rápidos no VS Code
- GitHub Actions – Integração e entrega contínua (CI/CD)
- Render – Plataforma de deploy da aplicação


## 🚀 Deploy
A aplicação está hospedada na plataforma Render, permitindo acesso público e escalabilidade automática.

## ⚙️ Pré-requisitos
Antes de iniciar o projeto, garanta que você tenha:
- Node.js (versão 16 ou superior)
- npm (instalado com o Node.js)
- Thunder Client ou Postman para testar os endpoints
- MongoDB local ou instância na nuvem (ex: MongoDB Atlas)

## 📫 Endpoints Principais
```console
    | Método | Endpoint | Descrição | 
    | GET | / | Mensagem de sucesso - API rodando corretamente
    | POST | /books | Criar um novo livro 
    | GET | /books/:id | Consultar um livro específico 
    | PATCH | /books/:id | Atualizar um livro 
    | DELETE | /books/:id | Remover um livro 
```


## 📁 Estrutura de Pastas (Clean Architecture)
```markdown
src/
│ ├── main.ts                 
│ ├── app/
│ │     ├── controller/       
│ │     └── routes/     
│ ├── config/  
│ │     └── environment/        # Configuração das variáveis de ambiente
│ ├── core/
│ │     ├── entities/
│ │     ├── repository/
│ │     └── usecases/
│ ├── infra/
│ │     ├── database/
│ │     └──  server/       
│ ├──  shared/               # Nova pasta de autenticação
│ │     ├── helpers/
│ │     └── middlewares/
│ └── tests/
│       └── unit/
├── .github/                  # Configuração do GitHub Actions
│   └── workflows/
│       
│
├── render.yaml
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```


## 🚀 Instalação e Execução
### Clone o repositório
```console
git clone https://github.com/kim-a9/Projeto5-GHActions-Render.git

```
###  Acesse a pasta do projeto
```console
cd pasta-projeto

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
---

# 🆕 Futuras Atualizações:

O projeto passará por melhorias significativas para torná-lo mais robusto. As próximas atualizações contarão com:
- **Criação, leitura, atualização e exclusão de usuários**: Implementação de métodos para criar, pesquisar, atualizar e excluir usuário da biblioteca.
- **Autenticação e Autorização**: Implementaremos autenticação e autorização com JWT para garantir maior segurança nas rotas
- **Testes de Integração**: Adicionaremos teste de integração para garantir que a aplicação funcione corretamente.
# Auto-Generated Forms API

## Descrição

- O Auto-Generated Forms API é uma aplicação backend desenvolvida com Fastify que permite a criação, armazenamento e recuperação de formulários dinâmicos. Cada formulário pode conter múltiplas perguntas, opções e condições, tornando-o ideal para sistemas que precisam de formulários personalizados e gerados automaticamente.

## Funcionalidades

- Criação de Formulários: Endpoint para criar formulários com perguntas dinâmicas.

- Listagem de Formulários: Endpoint para listar todos os formulários criados.

- Suporte a Condições e Opções: Cada pergunta pode conter condições e opções configuráveis.

- Resposta Dinâmica: Estrutura para armazenar respostas associadas às perguntas.

- Tecnologias Utilizadas:
  - Node.js: Ambiente de execução JavaScript.
  - Fastify: Framework web rápido e eficiente.
  - TypeScript: Tipagem estática para maior segurança e manutenção do código.
  - Zod: Validação de dados.
  - UUID: Geração de identificadores únicos.
  - CORS: Configuração de Cross-Origin Resource Sharing.

## Estrutura do Projeto

auto-generated-forms-api/
├── src/
│ ├── server.ts # Arquivo principal do servidor
│ ├── types/
│ │ ├── Form.ts # Definição do tipo Form
│ │ ├── Question.ts # Definição do tipo Question
│ │ ├── Condition.ts # Definição do tipo Condition
│ │ ├── Option.ts # Definição do tipo Option
├── package.json # Configuração do projeto
├── tsconfig.json # Configuração do TypeScript
└── README.md # Documentação do projeto

## Endpoints

### POST /forms

Cria um novo formulário.

**Request Body**:

```json
{
  "id": "string",
  "name": "string",
  "questions": [
    {
      "label": "string",
      "type": "string",
      "conditions": [],
      "options": [],
      "response": "string"
    }
  ]
}
```

**Response**:

```json
{
  "formId": "string"
}
```

### GET /forms

Retorna todos os formulários criados.

**Response**:

```json
{
  "forms": [
    {
      "id": "string",
      "name": "string",
      "questions": [
        {
          "id": "string",
          "label": "string",
          "type": "string",
          "conditions": [],
          "options": [],
          "response": "string"
        }
      ]
    }
  ]
}
```

## Como Executar

Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)

Passos

1. Clone o repositório:

```sh
git clone <url-do-repositorio>
cd auto-generated-forms-api
```

2. Instale as dependências:

```sh
npm install
```

3. Inicie o servidor:

```sh
npm run dev
```

4. O servidor estará disponível em `http://localhost:3333`

## Configuração

Porta do Servidor

Por padrão, o servidor roda na porta **3333**. Para alterar, modifique o parâmetro port no arquivo server.ts:

```typescript
fastify.listen({ port: 3333 }, () => {
  console.log("Servidor rodando na porta 3333");
});
```

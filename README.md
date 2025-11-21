# 🚀 Sistema de Ordens de Serviço (OS) para Manutenção

### 🛠️ CRUD Completo • Node.js • Express • PostgreSQL • HTML/CSS • Handlebars

O **Sistema de Ordens de Serviço** é uma aplicação web voltada para empresas ou profissionais que realizam **serviços de manutenção**, permitindo registrar, acompanhar e finalizar ordens de forma simples, rápida e organizada.

Este projeto foi desenvolvido com foco no **aprendizado de backend**, cobrindo:

* Manipulação de banco de dados
* Rotas e controllers
* Templates com Handlebars
* CRUD completo (Create, Read, Update, Delete)
* Integração entre Node.js, Express e PostgreSQL

---

## 🔧 Funcionalidades

✔ **Cadastro de clientes**
✔ **Cadastro de técnicos**
✔ **Abertura de ordens de serviço (OS)**
✔ **Listagem geral de OS**
✔ **Edição de OS**
✔ **Alteração de status: Aberta → Em andamento → Concluída**
✔ **Exclusão de OS**
✔ **Visualização de detalhes da OS**
✔ **Interface web usando Handlebars**

---

## 🏗️ Tecnologias Utilizadas

**Backend**

* Node.js
* Express
* pg (PostgreSQL Driver)
* Sequelize 

**Frontend**

* HTML5
* CSS3
* Handlebars

**Banco de Dados**

* PostgreSQL

---

## 📁 Estrutura do Projeto (sugerida)

```
/sistema-os
│── /src
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── /views
│   │     ├── layouts
│   │     ├── os
│   │     ├── clientes
│   ├── db.js
│   ├── server.js
│
│── /public
│── package.json
│── README.md
```

---

## 🗄️ Modelagem do Banco de Dados (PostgreSQL)

### 📌 Tabela: **clientes**

| Campo    | Tipo      | Descrição       |
| -------- | --------- | --------------- |
| id       | SERIAL PK | identificador   |
| nome     | VARCHAR   | nome do cliente |
| telefone | VARCHAR   | telefone        |
| endereco | TEXT      | endereço        |

### 📌 Tabela: **tecnicos**

| Campo         | Tipo      | Descrição |
| ------------- | --------- | --------- |
| id            | SERIAL PK |           |
| nome          | VARCHAR   |           |
| especialidade | VARCHAR   |           |

### 📌 Tabela: **ordens**

| Campo           | Tipo                     | Descrição |
| --------------- | ------------------------ | --------- |
| id              | SERIAL PK                |           |
| titulo          | VARCHAR                  |           |
| descricao       | TEXT                     |           |
| status          | VARCHAR DEFAULT 'Aberta' |           |
| cliente_id      | INTEGER FK               |           |
| tecnico_id      | INTEGER FK               |           |
| data_abertura   | TIMESTAMP DEFAULT NOW()  |           |
| data_fechamento | TIMESTAMP NULL           |           |

---

## ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/SEU_USUARIO/sistema-os.git
cd sistema-os
```

### 2️⃣ Instalar dependências

```
npm install
```

### 3️⃣ Criar o banco no PostgreSQL

```
CREATE DATABASE sistema_os;
```

### 4️⃣ Configurar conexão no arquivo `db.js`

Exemplo:

```js
const { Pool } = require('pg');

export const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sistema_os',
  password: 'SUA_SENHA',
  port: 5432
});
```

### 5️⃣ Rodar o servidor

```
node server.js
```

Servidor rodando em:

```
http://localhost:3333
```

---

## 📚 Aprendizados Proporcionados

Este projeto reforça conceitos essenciais para o mercado:

✔ Conexão com banco de dados
✔ Modelagem e relacionamento de tabelas
✔ CRUD completo com rotas REST
✔ Templates reutilizáveis com Handlebars
✔ Separação MVC (Model–View–Controller)
✔ Organização profissional de projetos backend

---

## 📝 Próximas Melhorias (Roadmap)

* Login para clientes e técnicos
* Sistema de permissões (ADMIN x TÉCNICO)
* Histórico de alterações da OS
* Upload de fotos do serviço
* Dashboard com gráficos
* API REST para clientes externos

---

## 👩‍💻 Sobre o Projeto

Este projeto foi desenvolvido como prática real para aprimorar habilidades de **backend**, **banco de dados** e **integração frontend-backend**, simulando um sistema usado em empresas de manutenção elétrica, hidráulica e predial.

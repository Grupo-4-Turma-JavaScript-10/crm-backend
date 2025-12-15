# Projeto Grupo 4 - Turma JavaScript 10

<p align="center">
  <img src="./.github/assets/logo.png" width="350" alt="Logo Path Educ">
</p>

<h1 align="center">📇 Path Educ</h1>

<p align="center">
  <strong>API NestJS para gestão de estudantes e bolsas</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
</p>

<br>

## 👥 Equipe de Desenvolvimento

Este projeto foi desenvolvido pela equipe **Grupo 4** da **Turma JavaScript 10**:

- **[Bruno Pinheiro de Carvalho](https://github.com/brunopdecarvalho)** - Membro
- **[Gabrieli Martins](https://github.com/imgabrielimartins)** - Membro
- **[Kauã Gabriel de Farias](https://github.com/kauafarias1)** - Membro
- **[Assis Pires Neto](https://github.com/Lancellot)** - Membro
- **[LiA](https://github.com/Lyliun)** - Membro
- **[Patrícia Souza](https://github.com/Patriciasdr)** - Membro
- **[Pedro](https://github.com/Perdop)** - Membro

## 📝 Descrição

O **CRM Backend** é uma API construída com NestJS para gerenciamento de estudantes interessados em cursos e das bolsas de estudo disponíveis. O objetivo é oferecer uma base sólida para cadastro, consulta, atualização e vinculação de estudantes às bolsas, com integração a banco de dados relacional e boas práticas de desenvolvimento.

### 🎯 Objetivos do Projeto

- Centralizar o cadastro e gestão de estudantes
- Gerenciar bolsas de estudo com regras de validade e status
- Permitir o vínculo entre estudantes e bolsas
- Disponibilizar endpoints simples e organizados (CRUD)

### 📦 Entidades e Atributos

#### Entidade: Bolsa
- `id`: Identificador único da bolsa
- `nome`: Nome da bolsa
- `porcentagem`: Percentual de desconto aplicado
- `instituicao`: Instituição responsável pela bolsa
- `curso`: Curso específico (opcional)
- `validade`: Data de validade da bolsa
- `ativa`: Indicador se a bolsa está ativa
- `estudante`: Lista de estudantes vinculados (relacionamento)

#### Entidade: Estudante
- `id`: Identificador único do estudante
- `nome`: Nome completo
- `email`: E-mail válido
- `endereco`: Endereço do estudante
- `idade`: Idade
- `cursoInteresse`: Curso de interesse
- `ativo`: Indicador se o cadastro está ativo
- `bolsa`: Bolsa vinculada (relacionamento)

### ✨ Funcionalidades Principais (CRUD)

- ✅ **Create - Criar Registros**: Inserir novos estudantes e bolsas
- 📋 **Read - Listar Registros**: Consultar estudantes e bolsas disponíveis
- 🔍 **Read - Buscar por ID**: Visualizar detalhes de um estudante/bolsa específico
- 🔄 **Update - Atualizar Registros**: Modificar dados de estudantes e bolsas
- ❌ **Delete - Remover Registros**: Excluir estudantes e bolsas

### ✨ Funcionalidades Extra

- **Atualização de Status**: Atualizar status do bolsista/estudante (ativo ou inativo) 

## 🚀 Tecnologias Utilizadas

### Back-end
- **NestJS** - Framework progressivo para Node.js
- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Linguagem de programação tipada

### Banco de Dados
- **MySQL** - Sistema de gerenciamento de banco de dados relacional
- **TypeORM** - ORM para modelagem e consultas

### Ferramentas de Desenvolvimento
- **Insomnia** ou **Postman** - Clientes API para testes
- **VSCode** - IDE
- **Git** - Controle de versão
- **GitHub** - Hospedagem de código
- **Trello** - Organização e gestão de tarefas

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## 🔧 Executando a Aplicação

```bash
# Modo desenvolvimento
npm run start

# Modo desenvolvimento com watch (reinicia automaticamente)
npm run start:dev

# Modo desenvolvimento com .env
npm run start:env

# Modo debug
npm run start:debug

# Modo produção (após build)
npm run build
npm run start:prod
```

A aplicação estará disponível em `http://localhost:3000`.

## 🧪 Executando os Testes

```bash
# Testes unitários
npm run test

# Testes em watch
npm run test:watch

# Testes e2e (end-to-end)
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📁 Estrutura do Projeto

```
src/
├── app.module.ts           # Módulo raiz da aplicação
├── main.ts                 # Ponto de entrada da aplicação
├── bolsa/
│   ├── bolsa.module.ts     # Módulo de bolsas
│   ├── controllers/
│   │   └── bolsa.controllers.ts  # Controller de bolsas
│   ├── services/
│   │   └── bolsa.service.ts      # Service de bolsas
│   └── entities/
│       └── bolsa.entity.ts  # Entidade Bolsa (TypeORM)
└── estudante/
    ├── estudante.module.ts  # Módulo de estudantes
    ├── controllers/
    │   └── estudante.controller.ts   # Controller de estudantes
    ├── services/
    │   └── estudante.services.ts     # Service de estudantes
    └── entities/
        └── estudante.entity.ts       # Entidade Estudante (TypeORM)
```

## 🌐 Deploy

Para fazer o deploy da aplicação NestJS em produção, consulte a [documentação oficial de deployment](https://docs.nestjs.com/deployment).

### Deploy com Mau (AWS)

```bash
npm install -g @nestjs/mau
mau deploy
```

## 📚 Recursos e Documentação

- [Documentação do NestJS](https://docs.nestjs.com)
- [Discord da Comunidade NestJS](https://discord.gg/G7Qnnhy)
- [Cursos Oficiais NestJS](https://courses.nestjs.com/)
- [NestJS Devtools](https://devtools.nestjs.com)

## 🤝 Contribuindo

Este é um projeto colaborativo da turma. Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Desenvolvido com ❤️ pela equipe Grupo 4 - Turma JavaScript 10
</p><p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

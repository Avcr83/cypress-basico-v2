# Testes automatizados com Cypress - Básico

👋 Seja bem-vindo(a)!

É muito bom tê-lo(a) aqui. Tenho certeza que você vai adorar este curso. ❤️

## O que você vai aprender

Durante o curso de testes automatizados com Cypress (básico), você vai aprender:

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar _upload_ de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como criar uma documentação mínima para seu projeto de testes automatizados

## Vamos começar?

Vá para a seção [estrutura do curso](./lessons/_course-structure_.md).

___

Este é mais um curso da [**Escola Talking About Testing**](https://udemy.com/user/walmyr).

# Cypress-básico-v2

Projeto de exemplo para o curso básico da escola online de conversação sobre testes.

#cy-data-teste

[![principal](https://github.com/wlsf82/cy-data-test/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/cy-data- teste/ações)

Projeto de amostra para demonstrar um comando personalizado `cy.dataTest` Cypress.

## Pré-requisitos

É necessário ter Node.js e npm instalados para executar este projeto.

> Usei as versões `v18.15.0` e `9.5.0` do Node.js e npm, respectivamente. Eu sugiro que você use as mesmas versões ou versões posteriores.

## Instalação

Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

## Testes

Voçe pode rodar os testes simulando uma porta dfe visulaização(viewport) para computador(desktop) ou dispositivo móvel(mobile). 

### Desktop

Execute `npm test` (ou `npm t` para a versão curta) para executar o teste no modo headless.

Ou execute `npm run cy:open` para abrir o Cypress no modo interativo Desktop (Área de Trabalho).

### Mobile

Execute 'npm run test: mobile' para executar o teste no modo headless em uma porta de visualização móvel(viewport).

Ou execute `npm run cy:open:mobile` para abrir o Cypress no modo interativo em uma porta de visualizção móvel(viewport).


## Apoie este projeto

Se você quiser apoiar este projeto, deixe um ⭐.
![Aluraflix-challenge](https://github.com/renawmontanari/aluraflix/assets/101996367/73d87b08-2494-4079-99e0-6978dbfcdd27)
# Aluraflix

 Challenge ONE

O desafio foi desenvolver do zero, a partir de um design no Figma, o projeto Aluraflix usando a tecnologia React. Este projeto envolve a criação de componentes reutilizáveis, a implementação de páginas dinâmicas e o uso de diversas tecnologias modernas para criar uma aplicação robusta e estilizada.

## Índice

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Sobre

O **Aluraflix Challenge ONE** é um projeto desenvolvido como parte do programa de desafios da Alura. O objetivo foi construir uma aplicação de streaming de vídeos semelhante ao Netflix, com funcionalidades como:

- Adição e edição de cards de vídeo
- Validação de formulários
- Navegação entre páginas
- Estilização customizada

Este projeto utiliza React para construção de interfaces de usuário, React Router para gerenciamento de rotas e Styled Components para estilização dinâmica.

## Instalação

Siga os passos abaixo para instalar e configurar o projeto em sua máquina local.

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm (versão 6.x ou superior)

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/aluraflix-challenge-one.git

2. Navegue até o diretório do projeto:

    ```bash
    cd aluraflix-challenge-one

3. Instale as dependências:

   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start

5. Abra o navegador e acesse:

   ```bash
   http://localhost:3000

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **React Router**: Biblioteca para gerenciamento de rotas no React
- **Styled-components**: Biblioteca para estilização de componentes React
- **React-icons**: Biblioteca de ícones para React
- **Fetch API**: Interface para fazer requisições HTTP
- **MockAPI**: Serviço para simular uma API RESTful

## Como Usar

### Criar um novo card

1. Navegue até a página de criação de novo card.
2. Preencha os campos obrigatórios: título, categoria, imagem, vídeo e descrição.
3. Clique no botão "Salvar" para criar o novo card.

### Editar um card existente

1. Navegue até o card que deseja editar.
2. Clique no botão "Editar".
3. Faça as alterações necessárias.
4. Clique no botão "Salvar" para atualizar o card.

###Estrutura do Projeto

##A estrutura de pastas do projeto é organizada da seguinte maneira:

src/
├── componentes/
│   ├── Banner/
│   ├── Footer/
│   ├── Header/
│   ├── ModalEditar/
│   ├── Secao/
├── Pages/
│   ├── Inicio/
│   ├── PaginaBase/
│   ├── VideoNovo/
├── App.css
├── App.jsx
├── index.jsx
├── routes.jsx


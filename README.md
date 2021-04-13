# Desafio React Web Frontend

Clone este repositório e comece já o nosso desafio.

OBS: Caso tenha alguma dúvida em relação ao teste é só nos mandar sua pergunta no canal #challenge-foton do Slack do [React Brasil](https://react-brasil-slack.herokuapp.com/).

## API

Use a api do [google books](https://developers.google.com/books/docs/v1/using) para os dados da tela.

```js
const query = 'harry potter';
fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
```

OBS: Pode ser utilizado a forma de chamada de apis de sua preferencia (fetch, axios, etc).

## Design/Telas

![book](https://user-images.githubusercontent.com/13947203/114557626-3d95ce80-9c40-11eb-94ab-57abc6a82904.png)

O design do site consiste em 3 telas, sendo elas:

### Home

1. Crie uma página com base no design da imagem acima.
2. É **obrigatório** um botão para navegar para a página de Listagem.

### Listagem

Nesta tela é **obrigatório** que o usuário tenha possibilidade de:

1. Ver a lista dos livros;
2. Possibilitar buscar mais livros com um botão no estilo "Load more";
3. Buscar livros pelo nome;
4. Clicar em um dos livros para ver seus detalhes.

### Detalhes do Livro

Nesta tela é **obrigatório** que o usuário tenha possibilidade de:

1. Ver as informações completas do livro selecionado;
2. Poder adicionar uma nota, dar like e adicionar aos favoritos (somente estado interno como useState, useReducer, etc).

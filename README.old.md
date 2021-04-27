# Desafio Frontend

Clone este repositório e comece já o nosso desafio.

Use React ou RN dependendo da vaga que você estiver tentando.

OBS: Caso tenha alguma dúvida em relação ao teste é só nos mandar sua pergunta no canal #challenge-foton do Slack do [React Brasil](https://react-brasil-slack.herokuapp.com/).

## API

Use a api do [google books](https://developers.google.com/books/docs/v1/using) para os dados da tela.

```js
const query = 'harry potter';
fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
```

OBS: Pode ser utilizado a forma de chamada de apis de sua preferencia (fetch, axios, etc).

## Design/Telas
https://www.figma.com/file/KFElqzD983WNyvMY1SaF0c/book-app?node-id=0%3A1

<img width="581" alt="Screen Shot 2021-04-13 at 10 19 47" src="https://user-images.githubusercontent.com/13947203/114559257-eb55ad00-9c41-11eb-9617-4e7627cc373e.png">


O design do site consiste em 3 telas, sendo elas:

### Home

1. Crie a tela pixel perfect com base no design acima
2. Os livros precisam ser clicáveis para mostrar a tela de detalhes

### Search

Nesta tela é **obrigatório** que o usuário tenha possibilidade de:

1. Ver a lista dos livros baseado na busca;
2. Possibilitar buscar mais livros com um botão no estilo "Load more";
3. Buscar livros pelo nome;
4. Clicar em um dos livros para ver seus detalhes.

### Detalhes do Livro

Nesta tela é **obrigatório** que o usuário tenha possibilidade de:

1. Ver as informações completas do livro selecionado;

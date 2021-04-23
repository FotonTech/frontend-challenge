# Architecture

Tabela de conteúdos

- [Architecture](#architecture)
  - [`.vscode/`](#vscode)
    - [Extensões úteis do vscode](#extensões-úteis-do-vscode)
  - [build/](#build)
  - [node_modules/](#node_modules)
  - [public/](#public)
  - [src/](#src)
    - [Decisões](#decisões)
    - [Overview](#overview)
    - [`components/`](#components)
      - [`bookCard.tsx`](#bookcardtsx)
      - [`circle.png`](#circlepng)
      - [`cutCircle.png`](#cutcirclepng)
      - [`lowerNav.tsx`](#lowernavtsx)
      - [`searchbar.tsx`](#searchbartsx)
    - [`pages/`](#pages)
      - [`details`](#details)
      - [`notFound`](#notfound)
    - [`redux/`](#redux)
      - [`actions/`](#actions)
      - [`reducers/`](#reducers)
      - [`hooks.ts`](#hooksts)
      - [`store.ts`](#storets)
    - [`types/`](#types)
    - [`utils/`](#utils)
  - [`App.tsx`](#apptsx)
  - [`index.tsx`](#indextsx)
  - [`Routes.tsx`](#routestsx)
  - [`theme.tsx`](#themetsx)
  - [`.prettierrc.js`](#prettierrcjs)
  - [`package.json`](#packagejson)
  - [`tsconfig.json`](#tsconfigjson)
  - [Extras](#extras)
  - [Por que `redux` e nao outro sistema de gerenciamento de estado?](#por-que-redux-e-nao-outro-sistema-de-gerenciamento-de-estado)
  - [Por que `chakra-ui` e não um sistema css "x"?](#por-que-chakra-ui-e-não-um-sistema-css-x)
  - [Importação por arquivo de fontes, invés do `google_fonts`?](#importação-por-arquivo-de-fontes-invés-do-google_fonts)
  - [Environment](#environment)
    - [Release](#release)

## `.vscode/`

Configurações que uso no vscode, além da formatação em salvamento.

- [`launch.json`](.vscode/launch.json) onde os comandos de debug estão
- [`settings.json`](.vscode/settings.json) configurações de salvamento automático, formatação e etcs. Não é utilizada atualmente, porém pode ser no futuro.

### Extensões úteis do vscode

It's highly recommended to, at least, add the `Dart` and `Flutter` extension, as they provide an absurd amount of useful
features.

## build/

Armazena todos os códigos gerados pelo comando `build`, podem ser servidos estaticamente através do `serve`.

## node_modules/

Todos os módulos npm utilizados na aplicação e suas peer dependencies, são instalados rodando `yarn add` ou `npm install`

## public/

Arquivos estáticos disponíveis em runtime, serão ligados com os da pasta build

## src/

Código fonte a ser buildado

### Decisões

> Pretendo explicar aqui as decisões de bibliotecas, estrutura e ambiente utilizadas
> pode ser pulada, é estritamente opinativa

Utilizo **ReactJs + Typescript + Redux** como stack principal, tanto por domínio de mercado quanto por experiências prévias com outros projetos e diversas tentativas e erros.

React possibilita muitas práticas ruins, porém seu suporte, desempenho e comunidade mais que fazem valer a pena sua utilização.

Typescript provê um grau configurável de *type-safety*, dando ao projeto mais robustez e prevendo erros de runtime, já que verifica tipos e propriedades no build. Pode parecer contraprodutivo, já que você escreve mais código e faz extensas declarações de tipos, mas no longo prazo compensa bastante. Já desenvolvi projetos imensos em Js puro e a conversão de trechos para typescript mostrou inúmeros bugs não detectados.

Quanto ao Redux, no caso da presente aplicação não é muito necessário, já que poderia utilizar as APIs padrões react, como HOC e `useContext`, ou até mesmo localStorage, mas preferi utilizá-lo por familiaridade, robustez e potencial escalabilidade. Se decidir incluir mais features, como CMS, edição, lista de desejos, carrinho, etcs, ficará mais simples adotar no Redux que trocar o sistema de gerenciamento de estado.

Por fim, quanto ao sistema de componentes, utilizo o [**ChakraUi**](https://chakra-ui.com/)

### Overview

O projeto visa criar um sistema análogo a um app de livros, mostrando livros novos, atuais, pesquisa, dentre outras coisas. Para tal utilizo a API do Google Books.

---

### `components/`

Utilizo para armazenar os componentes reutilizáveis da aplicação, sejam eles imagens ou componentes react. No momento nem todos são reutilizados, porém em futuras modificações serão necessários.

#### `bookCard.tsx`

Serve para mostrar um pequeno card com o livro, dentro de um repetidor `grid`. Recebe como parâmetro um livro e mostra sua thumbnail, nome e autor.

#### `circle.png`

Círculo informado no protótipo da aplicação, utilizo ao longo do app com rotações, resizes e cortes.

#### `cutCircle.png`

Idêntico ao componente acima, com a única diferença sendo o corte. Por algum motivo `overflow: hidden` no componente pai não cortou a imagem, então tive que recorrer a isso.

#### `lowerNav.tsx`

Barra de navegação do app, se encontra na parte inferior. Futuramente, com funcionalidades de perfil e biblioteca pessoal, servirá também para navegação.

#### `searchbar.tsx`

Barra de pesquisa do app, recebe como parâmetro as referências para a função setter de estado e o estado, ambos vindos do hook `useState()`.
Futuramente gostaria de refatorar para utilizar apenas redux, de modo a persistir a busca caso o componente seja desmontado/saia da página.

---

### `pages/`

Folder contendo as páginas da aplicação, cada página representada como um folder, com o ponto de acesso sendo o respectivo `index.tsx`.
Podem possuir também uma pasta `components/`, contendo os componentes utilizados em tal página.

#### `details`

Página responsável por mostrar detalhes de um livro, como descrição, nome, autor e a thumbnail grande.
Acessível por uma url dinâmica, com a rota `/details/{id}`. O id é então pesquisado dentre os livros armazenados, sendo mostrado em seguida.

#### `notFound`

Caso uma rota inválida seja digitada esse é o destino. Não gastei muita energia nela, porém é legal de se ter.

---

### `redux/`

Pasta contendo tudo do Redux, como hooks personalidados, actions, reducers e o objeto store.

#### `actions/`

Funções interceptáveis pelo middleware, com o sucessivo `dispatch` para a action devida, além do export de actions que não precisam de middleware.

#### `reducers/`

Em `index.ts` temos os reducers combinados para utilização na store. No momento tenho apenas o reducer `db`, utilizado para armazenar o array de livros, e o protótipo do `searchReducer`.

#### `hooks.ts`

Substitutos *type-safe* para `useSelector` e `useDispatch`. Uso bastante o do selector.

#### `store.ts`

Objeto da Store para envolver os componentes, além da configuração de persistência, whitelist/blacklist e demais itens.

---

### `types/`

Tipos compostos utilizados na aplicação, no momento só há dois:

- `bookType` ,responsável pela entidade *livro*, contendo os atributos necessários.
  
- `bookBeingReadType` ,responsável pela entidade *livro sendo lido*, contendo o `bookType`, total de capitulos e capitulo atual

---

### `utils/`

Funções utilitárias, não são componentes react. No momento há apenas um **sorter** de arrays por parâmetros.

---

## `App.tsx`

Componente principal da aplicação, contendo os *wrappers* e o componente de roteamento. Referenciado no `index.tsx`

## `index.tsx`

Ponto de acesso React, onde o acesso ao DOM é feito.

## `Routes.tsx`

Rotas da aplicação e ações assíncronas que devem acontecer no carregamento do app, como a chamada de API para recuperar todos os livros.

## `theme.tsx`

Arquivo de tema **ChakraUi**, contendo algumas predefinições. Não customizei muito, já que as fontes e cores variavam bastante, mas é bem interessante para criar seu próprio *ui kit*

## `.prettierrc.js`

Arquivo de configuração do prettier, com as configs que gosto para formatar o projeto. Basta rodar `yarn clean` no terminal para executar a limpeza dos códigos fonte.

## `package.json`

Arquivo de configuração do projeto, com dependências, metadados, scripts, etcs. De vital importância.

## `tsconfig.json`

Arquivo de configuração do typescript, com as regras e suas severidades customizadas para o projeto. Caso apagado ao iniciar o server ele irá criar um com predefinições.

---

## Extras

Alguns pontos importantes justificando minhas decisões.

## Por que `redux` e nao outro sistema de gerenciamento de estado?

Como disse antes, tenho experiência com gerenciamento de estados em aplicações maiores e Redux orquestra muito bem tudo. A curva de aprendizado é íngreme, porém vale a pena. Pode ser verboso, com muito *boilerplate*, com bastante popularidade de blbiotecas auxiliares, como `redux-toolkit´, mas acostumando-se e usando *snippets* é bem agradável de se desenvolver. O começo e configuração inicial são de fato chatos, mas a utilização, recuperação, manipulação de estado compensam bastante, sem falar na robustez. Utilizando-se com typescript há uma experiência muito boa.

## Por que `chakra-ui` e não um sistema css "x"?

Quis experimentar essa biblioteca popular e gostei muito. Não há necessidade de customizar tudo, como com `material-ui`, `bootstrap` ou outros do mercado, sendo apenas um caminho de acoplar css em javascript.

Competidores próximos para mim seriam `styled-components` e `tailwindCss`. Ambos são muito bons, mas `styled-components` deixa a desejar em tematização padrão, sendo pouco intuitivo configurar propriedades padrões, e `tailwindCss` tematiza até demais, abstraindo muito do css por baixo, fazendo ser quase outra linguagem. Preferi o `chakra-ui` por ser o meio termo, tendo tematização simples e proximidade com css puro.

## Importação por arquivo de fontes, invés do `google_fonts`?

Não encontrei elas facilmente na internet, utilizando uma variante `SF UI Pro`, que parecia bem próxima, e fiz a inclusão no `index.html`. As fontes Apple são encontradas em seu site para desenvolvedores, porém é necessário um sistema iOs para instalá-las, algo que não disponho, então por isso utilizei fontes com nomes análogos (apesar de no visual idênticas).

## Environment

Há o ambiente de desenvolvimento, com *hot reload* embutido, acessível através do seguinte comando:

**`yarn start`**

Caso seja necessário fazer deploy, o comando **`yarn build`** criará o bundle e mostrará instruções. Para integração contínua, utilizo a **Vercel**, com um hook direto no repositório do projeto. Lá o comando de build é **`CI=false yarn build`**. O `CI=false` é necessário para tratar warnings como apenas warnings, senão o build falharia, já que seriam considerados erros.

Se você usa o `vscode`, há os [arquivos de launch](.vscode/launch.json) para debug da aplicação, através de uma extensão de debug no vscode.

### Release

Releases disponíveis no repositório. A versão 1.0 foi lançada no dia 22/04/2021.

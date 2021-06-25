# Frontend Challenge - Sabanai

This is my google books App that i created for my foton frontend challenge application. Created with React Typescript and axios library. 

## API

This app uses '[Google Books](https://developers.google.com/books/docs/v1/using)' API to recover the data that will be shown on the app.

```ts
const query = 'harry potter';
app.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
```
## Design/Screens
https://www.figma.com/file/KFElqzD983WNyvMY1SaF0c/book-app?node-id=0%3A1

<img width="581" alt="Screen Shot 2021-04-13 at 10 19 47" src="https://user-images.githubusercontent.com/13947203/114559257-eb55ad00-9c41-11eb-9617-4e7627cc373e.png">


# Run the project

You can run the project either with docker or with npm/yarn.

## Running with docker

Steps:

* run cd app/.
* run yarn install or npm install
* run cd ..
* run sudo docker-compose up --build

## Running with npm/yarn

Steps:

* run cd app/.
* run yarn install or npm install
* run yarn start or npm start


## Build application

If you wanna check the build application, here is the link:

* **[Link](https://sabanai-frontend-challenge-o91giw1pb-sabanai104.vercel.app/)**

The website design has 3 screens, which are:

### Home

1. Create a Pixel Perfect screen based on design above;
2. The books must be clickable and redirect to **details** screen.

### Search

In this screen the functionalities below are **mandatory**:

1. See a list of books based on search query;
2. Make it possible to search for more books with a "Load more" button;
3. Search books by name;
4. Click on one of the books to see their details.

### Books details

In this screen the functionalities below are **mandatory**:

1. See all information for the selected book.

### Bonus 

I also worked on some extra functionalitys, for exemple: 

1. Web page responsitivity layout;
2. Smartphone responsitivity layout;
3. Implementation of share (with twitter), listen and read buttons functions;
4. Add a loading page animation layout;
5. Created more animations in some components.


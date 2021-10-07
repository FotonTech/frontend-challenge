export const URL = "https://www.googleapis.com/books/v1/volumes";

export const discoverBooks = [
  "Hooked",
  "The one Thing",
  "Good to great",
  "don't make me think",
  "originals",
];

export const currentlyReading = [
  "originals",
  "Good to great",
  "angels and demons",
];

export const parseBooks = (book) => {
  return {
    id: book.items[0].id,
    authors: book.items[0].volumeInfo.authors,
    description: book.items[0].volumeInfo.description,
    title: book.items[0].volumeInfo.title,
    subtitle: book.items[0].volumeInfo.subtitle,
    image: book.items[0].volumeInfo.imageLinks.thumbnail,
  };
};

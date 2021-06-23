const fetchBook = async (id) => {
  const resultJSON = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const result = await resultJSON.json();
  return result;
};

export default fetchBook;

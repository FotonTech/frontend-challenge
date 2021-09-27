import axios from 'axios'

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes'

export const getDefaultBooks = async () => {
  const discover = ["hooked", "The one thing gary", "Atomic Habits", "Principles Ray Dalio", "Essentialism"];
  const currentlyReading = "How Non-Conformists Move the World";

  try {
    const homeBooks = await axios.all([
      axios.get(`${GOOGLE_BOOKS_API}?q=${discover[0]}`),
      axios.get(`${GOOGLE_BOOKS_API}?q=${discover[1]}`),
      axios.get(`${GOOGLE_BOOKS_API}?q=${discover[2]}`),
      axios.get(`${GOOGLE_BOOKS_API}?q=${discover[3]}`),
      axios.get(`${GOOGLE_BOOKS_API}?q=${discover[4]}`),
      axios.get(`${GOOGLE_BOOKS_API}?q=${currentlyReading}`),
    ]).then(axios.spread((res1, res2, res3, res4, res5, res6) => {
      return {
        res1,
        res2,
        res3,
        res4,
        res5,
        res6
      }
    }))

    const parsedBooks = {
      res1: homeBooks.res1.data.items.filter(item => item.volumeInfo.imageLinks && item.volumeInfo.authors),
      res2: homeBooks.res2.data.items.filter(item => item.volumeInfo.imageLinks && item.volumeInfo.authors),
      res3: homeBooks.res3.data.items.filter(item => item.volumeInfo.imageLinks && item.volumeInfo.authors),
      res4: homeBooks.res4.data.items.filter(item => item.volumeInfo.imageLinks && item.volumeInfo.authors),
      res5: homeBooks.res5.data.items.filter(item => item.volumeInfo.imageLinks && item.volumeInfo.authors),
      res6: homeBooks.res6.data.items.filter(item => item.volumeInfo.imageLinks && item.volumeInfo.authors),
    }

    return parsedBooks
  } catch (error) {
    console.log(error)
  }
}

export const getBook = async (id) => {
  try {
    const book = await axios.get(`${GOOGLE_BOOKS_API}/${id}`)

    return book
  } catch (error) {
    console.log(error)
  }
}

export const searchBook = async (query) => {
  try {
    const search = new URLSearchParams({
      maxResults: 20,
      startIndex: '0',
      orderBy: 'relevance',
      q: 'new books',
      ...query
    })

    const response = await axios.get(`${GOOGLE_BOOKS_API}?${search.toString()}`)
    const { data } = response

    const parsedBooks = data.items.filter(item => item.volumeInfo.imageLinks && item.volumeInfo.authors)

    return parsedBooks
  } catch (error) {
    console.log(error)
  }
}

import { useQuery } from "react-query"

type Book = {
  volumeInfo: {
    authors: Array<string>
    description: string
    title: string
  }
}

const getBooksByQuery = async (params): Promise<{ items: Array<Book> }> => {
  try {
    const searchParams = new URLSearchParams({
      maxResults: "40",
      startIndex: "0", // @TODO add pagination
      orderBy: "newest",
      q: "new books",
      ...params,
    })

    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?${searchParams}`
    )

    const parsed = await res.json()

    if (!res.ok) {
      throw parsed?.error?.message
    }

    return parsed
  } catch (err) {
    throw err
  }
}

type Params = {
  maxResults: string
  startIndex: string
  orderBy: string
  q: string
}

const useBooksQuery = (params?: Params) =>
  useQuery(["books", params], () => getBooksByQuery(params))

export { getBooksByQuery, useBooksQuery }

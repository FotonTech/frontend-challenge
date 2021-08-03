import { useQuery } from "react-query"

type Book = {
  id: string
  volumeInfo: {
    authors: Array<string>
    description: string
    title: string
    imageLinks: {
      thumbnail: string
    }
    publishedDate: string
  }
}

type BooksApiVolumesResponse = {
  items: Array<Book>
  totalItems: number

  error?: {
    message?: string
  }
}

type BooksApiUserBookshelfVolumesResponse = {
  items: Array<Book>
  totalItems: number
}

const getVolumeById = async (id) => {
  try {
    const res = await fetch("https://www.googleapis.com/books/v1/volumes/" + id)

    const parsed: Book = await res.json()

    return parsed
  } catch (err) {
    throw err
  }
}

/**
 * Fetches book volumes from a specific user's bookshelf id
 */
const getUserBookshelfVolumes = async (userId: string, bookShelfId: string) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${bookShelfId}/volumes`
  )

  const parsed: BooksApiUserBookshelfVolumesResponse = await res.json()

  return parsed
}

const getBooksByQuery = async (params): Promise<{ items: Array<Book> }> => {
  try {
    const searchParams = new URLSearchParams({
      maxResults: "40",
      startIndex: "0", // @TODO add pagination
      orderBy: "newest",
      q: "new books",
      ...params
    })

    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?${searchParams}`
    )

    const parsedBody: BooksApiVolumesResponse = await res.json()

    if (!res.ok) {
      const { error } = parsedBody
      throw error?.message
    }

    /** Return only books that have images */
    const { items } = parsedBody
    const booksThatHaveImage = items.filter(
      (item) => item.volumeInfo.imageLinks
    )

    parsedBody.items = booksThatHaveImage

    return parsedBody
  } catch (err) {
    throw err
  }
}

const useVolumeByIdQuery = (id) =>
  useQuery(["volumeById", id], () => getVolumeById(id))

const useUserBookshelfVolumesQuery = (userId: string, bookshelfId: string) =>
  useQuery(["userBookshelfVolumes", userId, bookshelfId], () =>
    getUserBookshelfVolumes(userId, bookshelfId)
  )
type BooksQueryParams = {
  maxResults: string
  startIndex: string
  orderBy: string
  q: string
}

const useBooksQuery = (params?: BooksQueryParams) =>
  useQuery(["books", params], () => getBooksByQuery(params))

export {
  getBooksByQuery,
  useBooksQuery,
  useUserBookshelfVolumesQuery,
  useVolumeByIdQuery,
  getVolumeById
}

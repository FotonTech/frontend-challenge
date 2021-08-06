import { QueryFunctionContext, useInfiniteQuery, useQuery } from "react-query"

import { Book } from "@/types/books"

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
const getUserBookshelfVolumes = async (params: {
  userId: string
  bookshelfId: string
}) => {
  const { bookshelfId, userId } = params

  const res = await fetch(
    `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/${bookshelfId}/volumes`
  )

  const parsed: BooksApiUserBookshelfVolumesResponse = await res.json()

  return parsed
}

type BooksQueryParams = {
  maxResults?: string
  startIndex?: string
  orderBy?: string
  q?: string
}

const getBooksByQuery = async (
  params: BooksQueryParams,
  context?: QueryFunctionContext<any>
) => {
  try {
    const searchParams = new URLSearchParams({
      maxResults: "20",
      startIndex: "0",
      orderBy: "newest",
      q: "new books",
      ...params,
      /** Comes from infinite query */
      ...(context && context.pageParam)
    })

    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?${searchParams.toString()}`
    )

    const parsedBody: BooksApiVolumesResponse = await res.json()

    if (!res.ok) {
      const { error } = parsedBody
      throw error?.message
    }

    /** Return only books that have images */
    const { items } = parsedBody
    const booksThatHaveImage = items?.filter(
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

const useUserBookshelfVolumesQuery = (params: {
  userId: string
  bookshelfId: string
}) =>
  useQuery(["userBookshelfVolumes", params], () =>
    getUserBookshelfVolumes(params)
  )

const useBooksQuery = (params?: BooksQueryParams) =>
  useQuery(["books", params], () => getBooksByQuery(params))

const useBooksInfiniteQuery = (params?: BooksQueryParams) =>
  useInfiniteQuery(
    ["books", params],
    (context) => getBooksByQuery(params, context),
    {
      getNextPageParam: (_, pages) => {
        return {
          startIndex: 20 * pages.length
        }
      },
      refetchOnWindowFocus: false
    }
  )

export {
  getBooksByQuery,
  useBooksQuery,
  useBooksInfiniteQuery,
  useUserBookshelfVolumesQuery,
  useVolumeByIdQuery,
  getVolumeById,
  getUserBookshelfVolumes
}

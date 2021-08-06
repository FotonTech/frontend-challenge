import { QueryFunctionContext, useInfiniteQuery, useQuery } from "react-query"

import { BooksApiVolume } from "@/types/books-api"

type BooksApiUserBookshelfVolumesResponse = {
  items: Array<BooksApiVolume>
  totalItems: number
}

type VolumesApiQueryParams = {
  maxResults?: string
  startIndex?: string
  orderBy?: string
  q?: string
}

type VolumesByQueryApiResponse = {
  items: Array<BooksApiVolume>
  totalItems: number

  error?: {
    message?: string
  }
}

type UserBookshelfVolumesFunctionParams = {
  userId: string
  bookshelfId: string
}

const GOOGLE_BOOKS_API_DOMAIN = "https://www.googleapis.com/books/v1"
const MAX_ITEMS_PER_RESULT = 20

const getVolumeById = async (id: string | number) => {
  try {
    const res = await fetch(`${GOOGLE_BOOKS_API_DOMAIN}/volumes/${id}`)

    const parsed: BooksApiVolume = await res.json()

    return parsed
  } catch (err) {
    throw err
  }
}

/**
 * Fetches book volumes from a specific user's bookshelf id
 */
const getUserBookshelfVolumes = async (
  params: UserBookshelfVolumesFunctionParams
) => {
  const { bookshelfId, userId } = params

  const res = await fetch(
    `${GOOGLE_BOOKS_API_DOMAIN}/users/${userId}/bookshelves/${bookshelfId}/volumes`
  )

  const parsed: BooksApiUserBookshelfVolumesResponse = await res.json()

  return parsed
}

const getVolumesBySearchQuery = async (
  params: VolumesApiQueryParams,
  context?: QueryFunctionContext<any>
) => {
  try {
    const searchParams = new URLSearchParams({
      maxResults: MAX_ITEMS_PER_RESULT,
      startIndex: "0",
      orderBy: "newest",
      q: "new books",
      ...params,
      /** Comes from infinite query */
      ...(context && context.pageParam)
    })

    const res = await fetch(
      `${GOOGLE_BOOKS_API_DOMAIN}/volumes?${searchParams.toString()}`
    )

    const parsedBody: VolumesByQueryApiResponse = await res.json()

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

const useVolumeByIdQuery = (id: string | number) =>
  useQuery(["volumeById", id], () => getVolumeById(id))

const useUserBookshelfVolumesQuery = (
  params: UserBookshelfVolumesFunctionParams
) =>
  useQuery(["userBookshelfVolumes", params], () =>
    getUserBookshelfVolumes(params)
  )

const useBooksQuery = (params?: VolumesApiQueryParams) =>
  useQuery(["books", params], () => getVolumesBySearchQuery(params))

/**
 * Saves data from previous requests into an array of pages
 * So that the query can be fetched infinitely
 * Check out more at: https://react-query.tanstack.com/guides/infinite-queries
 */
const useBooksInfiniteQuery = (params?: VolumesApiQueryParams) =>
  useInfiniteQuery(
    ["books", params],
    (context) => getVolumesBySearchQuery(params, context),
    {
      getNextPageParam: (_, pages) => {
        return {
          startIndex: MAX_ITEMS_PER_RESULT * pages.length
        }
      },
      refetchOnWindowFocus: false
    }
  )

export {
  getVolumesBySearchQuery,
  useBooksQuery,
  useBooksInfiniteQuery,
  useUserBookshelfVolumesQuery,
  useVolumeByIdQuery,
  getVolumeById,
  getUserBookshelfVolumes
}

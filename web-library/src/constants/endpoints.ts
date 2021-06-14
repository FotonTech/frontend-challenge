
export const BASE_API_URL = 'https://www.googleapis.com/books/v1/volumes'

export const endpoints = {
  getBookDetails: (id: string) => `${BASE_API_URL}/${id}`,
  searchBooks: 
    (searchQuery: string, maxResults?: number) => `${BASE_API_URL}?q=${encodeURIComponent(searchQuery)}${maxResults ? `&maxResults=${maxResults}`: ''}`,
}

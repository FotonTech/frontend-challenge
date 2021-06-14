
export const routes = {
  home: '/',
  detailedBook: (bookId = 'bookId') => `/detailedBook/:${bookId}`,
  searchBook: (searchQuery = 'bookId') => `/searchBooks/:${searchQuery}`
}

export default {
  'BOOK_LIST': (state, bookList) => (state.bookList = bookList),
  'BOOK_LIST_LOADING': (state, bookListLoading) => (state.bookListLoading = bookListLoading),
  'BOOK_INFO': (state, bookInfo) => (state.bookInfo = bookInfo),
  'BOOK_INFO_LOADING': (state, bookInfoLoading) => (state.bookInfoLoading = bookInfoLoading),
  'SEARCH_PARAMS': (state, searchParams) => (state.searchParams = searchParams),
  'SET_PAGE': (state, page) => (state.page = page)
}
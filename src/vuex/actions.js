import axios from 'axios'
import _ from 'lodash'
const query = 'https://www.googleapis.com/books/v1'

export default {
  async getBookList({ state, commit }, params) {
    if (localStorage.getItem('lastSearch') === params && state.page === 0) {
      const bookListCached = JSON.parse(localStorage.getItem('bookList'))
      commit('BOOK_LIST', bookListCached)
      commit('SET_PAGE', (bookListCached.length / 10) - 1)
    } else {
      if (localStorage.getItem('lastSearch') !== params) {
        commit('SET_PAGE', 0)
        commit('BOOK_LIST', [])
      }
      localStorage.setItem('lastSearch', params)
      try {
        if (state.page === 0) {
          commit('BOOK_LIST_LOADING', true)
        }
        const { data } = await axios.get(`${query}/volumes?maxResults=10&startIndex=${state.page}&q=${params}`)
        const bookList = data.items.map((book) => {
          return {
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unkown author',
            description: book.volumeInfo.description || book.searchInfo?.textSnippet || '',
            imgCover: book.volumeInfo.imageLinks?.smallThumbnail || book.volumeInfo.imageLinks?.thumbnail
          }
        })
        const stateBookList = _.cloneDeep(state.bookList).concat(bookList)
        localStorage.setItem('bookList', JSON.stringify(stateBookList))
        commit('BOOK_LIST', stateBookList)
      } catch {
        commit('BOOK_LIST', [])
      } finally {
        commit('BOOK_LIST_LOADING', false)
      }
    }
  },
  async searchBookById({ commit }, bookId) {
    if (localStorage.getItem('lastBookId') === bookId) {
      const bookCached = JSON.parse(localStorage.getItem('bookInfo'))
      commit('BOOK_INFO', bookCached)
    } else {
      localStorage.setItem('lastBookId', bookId)
      try {
        commit('BOOK_INFO_LOADING', true)
        const { data } = await axios.get(`${query}/volumes/${bookId}`)
        const bookInfo = {
          id: data.id,
          title: data.volumeInfo.title,
          author: data.volumeInfo.authors ? data.volumeInfo.authors[0] : 'Unkown author',
          description: data.volumeInfo.description || data.searchInfo?.textSnippet || '',
          imgCover: data.volumeInfo.imageLinks?.smallThumbnail || data.volumeInfo.imageLinks?.thumbnail
        }
        console.log('bookInfo:', bookInfo)
        localStorage.setItem('bookInfo', JSON.stringify(bookInfo))
        commit('BOOK_INFO', bookInfo)
      } catch {
        commit('BOOK_INFO', null)
      } finally {
        commit('BOOK_INFO_LOADING', false)
      }
    }
  }
}
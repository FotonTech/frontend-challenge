import React, { useCallback, useEffect } from 'react';
import * as BooksApi from '../api/books';

export type BooksProps = { kind: string; totalItems: number; items: any[] };

type InitialState = {
  books: BooksProps;
  isLoading: boolean;
  error: any;
  search: string;
  searchIndex: number;
  totalPages: number;
};

type ActionTypes =
  | {
      type: 'GET_BOOKS_SEARCH';
    }
  | {
      type: 'GET_BOOKS_SUCCESS';
      payload: {
        books: BooksProps;
      };
    }
  | {
      type: 'GET_BOOKS_ERROR';
      payload: { error: any };
    }
  | {
      type: 'SET_SEARCH_TEXT';
      payload: { search: string };
    }
  | {
      type: 'SET_SEARCH_INDEX';
      payload: { searchIndex: number };
    };

type Dispatch = {
  setSearchText: (action: string) => void;
  setSearchIndex: (action: number) => void;
};

type BooksContextProps = {
  state: InitialState;
  actions: Dispatch;
};

type BooksProviderProps = React.FC<{ children: React.ReactNode }>;

export const initialBooksState = { kind: '', totalItems: 0, items: [] };

const initialState = {
  books: initialBooksState,
  isLoading: false,
  error: null,
  search: '',
  searchIndex: 0,
  totalPages: 0
};

export const BooksContext = React.createContext<BooksContextProps>({
  state: initialState,
  actions: {
    setSearchText: (action) => action,
    setSearchIndex: (action) => action
  }
});

const reducer = (state: InitialState = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'GET_BOOKS_SEARCH': {
      return {
        ...state,
        books: initialBooksState,
        isLoading: true,
        error: null
      };
    }
    case 'GET_BOOKS_SUCCESS': {
      return {
        ...state,
        books: action.payload.books,
        isLoading: false,
        error: null
      };
    }
    case 'GET_BOOKS_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case 'SET_SEARCH_TEXT': {
      return {
        ...state,
        isLoading: false,
        search: action.payload.search
      };
    }
    case 'SET_SEARCH_INDEX': {
      return {
        ...state,
        isLoading: false,
        searchIndex: action.payload.searchIndex
      };
    }
    default: {
      return { ...state };
    }
  }
};

export const BooksProvider: BooksProviderProps = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (state.search !== '') {
          await BooksApi.searchBooks({
            query: state.search,
            startIndex: state.searchIndex
          })
            .then(({ data }) => {
              dispatch({
                type: 'GET_BOOKS_SUCCESS',
                payload: {
                  books: data
                }
              });
            })
            .catch((error) => {
              dispatch({ type: 'GET_BOOKS_ERROR', payload: { error } });
            });
        } else {
          dispatch({
            type: 'GET_BOOKS_SUCCESS',
            payload: {
              books: initialBooksState
            }
          });
        }
      } catch (error) {
        dispatch({ type: 'GET_BOOKS_ERROR', payload: { error } });
      }
    };

    fetchBooks();
  }, [dispatch, state.search, state.searchIndex]);

  const setSearchText = useCallback(
    (text: string) => {
      dispatch({ type: 'GET_BOOKS_SEARCH' });
      dispatch({
        type: 'SET_SEARCH_TEXT',
        payload: { search: text }
      });
    },
    [dispatch]
  );

  const setSearchIndex = useCallback(
    (searchIndex: number) => {
      dispatch({
        type: 'SET_SEARCH_INDEX',
        payload: { searchIndex }
      });
    },
    [dispatch]
  );

  return (
    <BooksContext.Provider
      value={{
        state,
        actions: { setSearchText, setSearchIndex }
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

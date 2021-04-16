import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import React from "react";

const persistenceConfigs = {
   key: "estadoAppCarrinho", // chave no localStorage
   storage,
};
const persistedReducer = persistReducer(persistenceConfigs, rootReducer);
//visualizar store com o chrome
const store = createStore(
   persistedReducer,
   composeWithDevTools(
      applyMiddleware(thunk),
      // other store enhancers if any
   ),
);
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const ReduxWrapper: React.FC = (props) => {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>{props.children}</PersistGate>
      </Provider>
   );
};

export default ReduxWrapper;

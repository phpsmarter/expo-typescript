import { createStore, combineReducers, applyMiddleware, compose } from "redux";
//import thunkMiddleware from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import devTools from "remote-redux-devtools";
import thunk from "redux-thunk";

//TODO 这里的persist还没有加入
import { persistStore } from "redux-persist";

import { chatReducer } from "./chat/reducers";
import { shopReducer } from "./shop/reducers";

const rootReducer = combineReducers({
  chat: chatReducer,
  shop: shopReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares: any[] = [logger, thunk];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const enhancer = compose(
    middleWareEnhancer,
    devTools({
      name: "startkit",
      realtime: true
    })
  );

  const store = createStore(rootReducer, enhancer);

  return store;
}

// export default function configureStore(onCompletion: () => void): any {
//   const enhancer = compose(
//     applyMiddleware(thunk),
//     devTools({
//       name: "nativestarterkit",
//       realtime: true,
//     }),
//   );

//   const store = createStore(reducer, enhancer);
//   persistStore(store, onCompletion);

//   return store;
// }

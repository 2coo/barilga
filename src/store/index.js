import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["rootReducer"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["helperReducer"]
};

const middlewares = [ReduxThunk];

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

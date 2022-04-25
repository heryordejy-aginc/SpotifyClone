import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//custom imports
import reducers from './reducers';

// saga middleware instance
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(
    sagaMiddleware,
    createLogger({
      predicate: () => __DEV__,
    }),
  ),
);

const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
  whitelist: ['authReducer', 'ADD_WISHLIST'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);

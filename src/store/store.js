import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from './Products/Product.slice';
import { reducer as LoadMoreReducer } from './LoadMoreProducts/loadMore';
import { reducer as consumerReducer } from './consumer/consumer.slice';

const rootAction = combineReducers({
  LoadMoreNum: LoadMoreReducer,
  consumer: consumerReducer,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: rootAction,
  middleware: (getDefultMiddleware) => {
    return getDefultMiddleware().concat(api.middleware);
  },
});

export default store;

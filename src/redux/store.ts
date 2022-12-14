import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import socketReducer from './socketReducer';
import userReducer from './userReducer';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

const rootReducer = combineReducers({
  user: userReducer,
  socket: socketReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
// redux-persist 관련 코드 주석처리

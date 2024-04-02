import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createEmployeeReducer from "../slices/createEmployeeSlice";

// Configuration for persistence
const persistConfig = {
  key: "root",
  storage,
};

// Type of global state
export type RootReducer = {
  createEmployee: typeof createEmployeeReducer;
};

// Root reducer with persistReducer
const rootReducer = combineReducers<RootReducer>({
  createEmployee: createEmployeeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with the persistent reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistant store
const persistor = persistStore(store);

export { store, persistor };

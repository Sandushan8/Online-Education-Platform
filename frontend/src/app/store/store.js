import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer/AuthReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const store = configureStore({
  reducer: {
    auth: persistReducer(
      {
        key: "authentication",
        storage: storage,
      },
      authReducer
    ),
  },
});

export const persistor = persistStore(store);

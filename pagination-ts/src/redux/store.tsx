import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./features/slice";
import btnCounterSlice from "./features/slice";
import {productsApi} from "./features/apiSlice"

export const store = configureStore({
  reducer: {
    inputValuex: inputSlice,
    [productsApi.reducerPath]: productsApi.reducer

    // btnCounter: btnCounterSlice,
    // productsApi.reducerPath: productsApi
  },
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

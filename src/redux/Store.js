import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./ItemsSlice";

export const Store = configureStore({
    reducer:{items:ItemsSlice}
});
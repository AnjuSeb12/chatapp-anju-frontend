import { configureStore } from "@reduxjs/toolkit";
import ConversationReducer from "./ConverSlice.js"

const Store = configureStore({
    reducer:ConversationReducer ,
})

export { Store };
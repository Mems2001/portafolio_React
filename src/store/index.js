import { configureStore } from "@reduxjs/toolkit";
import languagesSlice from  './slices/languages.slice'

export default configureStore (
    {
        reducer:{
            languagesSlice
        }
    }
)
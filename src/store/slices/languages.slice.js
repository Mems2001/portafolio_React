import { createSlice } from "@reduxjs/toolkit";
import spanish from '../../json/spanish.json'

const languagesSlice = createSlice (
    {
        name: 'languages',
        initialState: spanish ,
        reducers: {
            setLanguage: (state,action) => state = action.payload
        }
    }
)

export default languagesSlice.reducer

export const { setLanguage } = languagesSlice.actions
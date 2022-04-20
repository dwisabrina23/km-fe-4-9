import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: "",
    },
    reducers: {
        searchKeyword: (state, action) => {
            state.data = action.payload
        },
        resetForm: (state, action) => {
            state.data = null
        }
    }
})

export const { searchKeyword, resetForm} = searchSlice.actions;

export default searchSlice.reducer;
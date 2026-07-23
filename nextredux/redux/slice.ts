import { createSlice } from "@reduxjs/toolkit";


interface stateType {
    theme: boolean
}

const initialState: stateType = {
    theme: false
}

export const Slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        changeTheme: state => { state.theme = !state.theme }
    }
})

export const { changeTheme } = Slice.actions;
export default Slice.reducer


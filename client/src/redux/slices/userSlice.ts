import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
    token: null,
    curent: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }

})
export default userSlice.reducer;
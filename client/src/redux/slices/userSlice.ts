import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    token: null,
    curent: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.token = action.payload.token;
        },

    }

})
export default userSlice.reducer;
export const { login } = userSlice.actions;
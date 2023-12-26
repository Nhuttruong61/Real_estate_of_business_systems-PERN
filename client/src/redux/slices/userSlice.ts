import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    token: null,
    curent: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.token = action.payload.accessToken;
            state.curent = action.payload.user;
        },

    }

})
export default userSlice.reducer;
export const { signIn } = userSlice.actions;
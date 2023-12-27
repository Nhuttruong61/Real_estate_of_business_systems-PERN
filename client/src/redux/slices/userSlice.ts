import { getCurrentApi } from "@/apis/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    current: null,
};

export const fetchCurrentUser: any = createAsyncThunk(
    'fetchCurrentUser',
    async () => {
        const res = await getCurrentApi();
        return res.response
            ;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.current = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state) => {
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                console.log(action);
                // Handle fulfilled state with data from action.payload
                state.current = action.payload;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                // Handle rejected state if needed
            });
    },
});

export const { signIn, logout } = userSlice.actions;
export default userSlice.reducer;

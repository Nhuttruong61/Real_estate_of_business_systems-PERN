import { getCurrentApi } from "@/apis/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: null,
    refreshtoken: null,
    current: null,
    isloading: true,
};

export const fetchCurrentUser: any = createAsyncThunk(
    'fetchCurrentUser',
    async (token: any) => {
        const res = await getCurrentApi(token);
        return res.response
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        signIn: (state, action) => {
            state.token = action.payload.token;
            state.refreshtoken = action.payload.refreshtoken
            state.isloading = false
        },
        updateToken: (state, action) => {
            state.token = action.payload;
            state.isloading = false
        },
        cleartoken: (state, action) => {
            state.token = action.payload;
            state.refreshtoken = action.payload;
            state.isloading = false
        },
        logout: (state) => {
            state.token = null;
            state.current = null;
            state.refreshtoken = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.pending, (state: any) => {
                state.current = { ...state.current }

            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                // Handle fulfilled state with data from action.payload
                state.current = action.payload;
                state.isloading = false
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                // Handle rejected state if needed
                state.current = null
                state.isloading = false
            });
    },
});

export const { signIn, logout, updateToken, cleartoken } = userSlice.actions;
export default userSlice.reducer;

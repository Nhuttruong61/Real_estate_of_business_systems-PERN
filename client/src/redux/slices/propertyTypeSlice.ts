
import { getAllPropertyType } from "@/apis/propertyType"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: null,
    isloading: true,
}

export const fetchPropertyType = createAsyncThunk(
    "propertyType/fetch",
    async () => {
        const res = await getAllPropertyType()
        return res.response
    }
)
const propertySlice = createSlice({
    initialState,
    name: "propertyType",
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPropertyType.pending, (state: any) => {
                state.data = null;

            })
            .addCase(fetchPropertyType.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isloading = false;

            })
            .addCase(fetchPropertyType.rejected, (state, action) => {
                state.data = null;
                state.isloading = false;

            })
    }
})
export default propertySlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFire } from "../../utils/firebase";

// First, create the thunk
export const fetchAllTats = createAsyncThunk("fetchAll", async () => {
  const response = await getFire();
  return response;
});

const initialState = { data: [], loading: true, error: null };

export const tatsSlice = createSlice({
  name: "tats",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllTats.pending]: (state, action) => {
      if (state.loading === false) {
        state.loading = true;
      }
    },
    [fetchAllTats.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.data = action.payload;
        // console.log(action.payload); // null
        state.loading = false;
      }
    },
    [fetchAllTats.rejected]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = action.payload;
      }
    },
  },
});

// export const {  } = tatsSlice.actions;

export default tatsSlice.reducer;

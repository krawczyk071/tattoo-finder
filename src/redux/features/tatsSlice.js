import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, getFire } from "../../utils/firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

// First, create the thunk
export const fetchAllTats = createAsyncThunk("fetchAll", async () => {
  console.log("ask");

  const response = await getFire();
  return response;
});

export const editTat = createAsyncThunk(
  "editTat",
  async ({ editedTat, vote }) => {
    console.log(editedTat, vote);

    const colRef = collection(db, "tats");
    const tatRef = doc(colRef, editedTat.id);
    const newTat = { ...editedTat, votes: Number(editedTat.votes) + vote };
    console.log("f1");

    await updateDoc(tatRef, newTat);
    console.log("f2");

    return true;
  }
);

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
        console.log("att", action.payload); // null
        state.loading = false;
      }
    },
    [fetchAllTats.rejected]: (state, action) => {
      if (state.loading === true) {
        state.loading = false;
        state.error = action.payload;
      }
    },
    [editTat.pending]: (state, action) => {},
    [editTat.fulfilled]: (state, action) => {},
    [editTat.rejected]: (state, action) => {
      console.log(action.error);
    },
  },
});

// export const {  } = tatsSlice.actions;

export default tatsSlice.reducer;

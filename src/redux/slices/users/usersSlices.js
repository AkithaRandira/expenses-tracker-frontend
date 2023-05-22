import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//login action
export const loginUserAction = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      //making http call
      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        payload,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slices
const userSlices = createSlice({
  name: "users",
  initialState: {},
  extraReducers: (builder) => {
    //handle pending state
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.userLoading = true;
      state.userAppError = undefined;
      state.userServerError = undefined;
    });

    //handle success state
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.userLoading = false;
      state.userAppError = undefined;
      state.userServerError = undefined;
    });

    //handle rejected state
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.userLoading = false;
      state.userAppError = action?.payload?.message;
      state.userServerError = action?.error?.message;
    });
  },
});

export default userSlices.reducer;

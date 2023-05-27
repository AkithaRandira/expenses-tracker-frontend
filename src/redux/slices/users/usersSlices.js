import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";

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
        `${baseURL}/users/login`,
        payload,
        config
      );

      //save user into local storage
      localStorage.setItem("userInfo", JSON.stringify(data));

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//register action
export const registerUserAction = createAsyncThunk(
  "user/register",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      //making http call
      const { data } = await axios.post(
        `${baseURL}/users/register`,
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

//get user from local storage and store it in our redux store
const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : undefined;

const userSlices = createSlice({
  name: "users",
  initialState: {
    userAuth: userLoginFromStorage,
  },
  extraReducers: (builder) => {
    //login
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
      state.userAppError = action?.payload?.msg;
      state.userServerError = action?.error?.msg;
    });

    //register
    //handle pending state
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.userLoading = true;
      state.userAppError = undefined;
      state.userServerError = undefined;
    });

    //handle success state
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.userLoading = false;
      state.userAppError = undefined;
      state.userServerError = undefined;
    });

    //handle rejected state
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.userLoading = false;
      state.userAppError = action?.payload?.msg;
      state.userServerError = action?.error?.msg;
    });
  },
});

export default userSlices.reducer;

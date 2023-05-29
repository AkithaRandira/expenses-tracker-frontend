import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";

//add expenses action
export const createExpenseAction = createAsyncThunk(
  "expense/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //get user token from store
    const userToken = getState()?.users?.userAuth?.token;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    try {
      //making http call
      const { data } = await axios.post(`${baseURL}/expense`, payload, config);

      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all expenses action
export const fetchAllExpenseAction = createAsyncThunk(
  "expense/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //get user token from store
    const userToken = getState()?.users?.userAuth?.token;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    try {
      //making http call
      const { data } = await axios.get(
        `${baseURL}/expense?page=${payload}`,
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

//expense slices
const expensesSlices = createSlice({
  name: "expenses",
  initialState: { expenses: ["45", "54"] },
  extraReducers: (builder) => {
    //create expense
    builder.addCase(createExpenseAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createExpenseAction.fulfilled, (state, action) => {
      state.loading = false;
      state.expenseCreated = action?.payload;
      state.appError = undefined;
      state.serverError = undefined;
    });

    builder.addCase(createExpenseAction.rejected, (state, action) => {
      state.loading = false;
      state.appError = action?.payload?.msg;
      state.serverError = action?.error?.msg;
    });

    //fetch all expense
    builder.addCase(fetchAllExpenseAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllExpenseAction.fulfilled, (state, action) => {
      state.loading = false;
      state.expensesList = action?.payload;
      state.appError = undefined;
      state.serverError = undefined;
    });

    builder.addCase(fetchAllExpenseAction.rejected, (state, action) => {
      state.loading = false;
      state.appError = action?.payload?.msg;
      state.serverError = action?.error?.msg;
    });
  },
});

export default expensesSlices.reducer;

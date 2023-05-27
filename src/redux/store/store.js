import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../slices/expenses/expensesSlices";
import usersReducer from "../slices/users/usersSlices";

const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expensesReducer,
  },
});

export default store;

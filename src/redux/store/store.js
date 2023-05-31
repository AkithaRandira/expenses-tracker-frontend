import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../slices/expenses/expensesSlices";
import usersReducer from "../slices/users/usersSlices";
import incomesReducer from "../slices/incomes/incomesSlices";

const store = configureStore({
  reducer: {
    users: usersReducer,
    expenses: expensesReducer,
    incomes: incomesReducer,
  },
});

export default store;

// redux/expenseSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  expenseList: [],
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenseList.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenseList = state.expenseList.filter(
        expense => expense.id !== action.payload.id,
      );
    },
    updateExpense: (state, action) => {
      const index = state.expenseList.findIndex(
        expense => expense.id === action.payload.id,
      );
      if (index !== -1) {
        state.expenseList[index] = action.payload;
      }
    },
  },
});

export const {addExpense, removeExpense, updateExpense} = expenseSlice.actions;

export default expenseSlice.reducer;

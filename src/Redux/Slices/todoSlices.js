import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const initialState = {
  error: null,
  loading: false,
  todos: [],
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetch(
      "https://react.massivepixel.io/api/kloda.dariusz",
      {
        method: "GET",
        redirect: "follow",
      }
    );
    const parsed = await response.text();
    const {data} = JSON.parse(parsed);
    console.log(data);
    return data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTodos.pending,
        (state, action) => {
          state.status = true;
        }
      )
      .addCase(
        fetchTodos.fulfilled,
        (state, action) => {
          console.log(action, "action");
          state.loading = false;
          state.todos = [...action.payload];
        }
      );
  },
});

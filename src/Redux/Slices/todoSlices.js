import {createSlice} from "@reduxjs/toolkit";

import {
  fetchTodos,
  saveTodo,
  markCompleteTodo,
  deleteTodo,
  updateTodo,
} from "./../Actions/appActions";

const initialState = {
  error: null,
  loading: false,
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTodos.pending,
        (state, action) => {
          state.loading = true;
        }
      )
      .addCase(
        fetchTodos.fulfilled,
        (state, action) => {
          state.loading = false;
          state.todos = action.payload.sort(
            (a, b) =>
              a.is_completed - b.is_completed
          );
        }
      )
      .addCase(
        fetchTodos.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        saveTodo.pending,
        (state, action) => {
          state.loading = true;
        }
      )
      .addCase(
        saveTodo.fulfilled,
        (state, action) => {
          state.todos.unshift(action.payload);
          state.loading = false;
        }
      )
      .addCase(
        saveTodo.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        markCompleteTodo.pending,
        (state, action) => {
          state.loading = true;
        }
      )
      .addCase(
        markCompleteTodo.fulfilled,
        (state, action) => {
          state.todos.forEach((el) => {
            if (el.id === action.payload.id) {
              el.is_completed =
                action.payload.is_completed;
            }
          });

          state.loading = false;
        }
      )
      .addCase(
        markCompleteTodo.rejected,
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        deleteTodo.pending,
        (state, action) => {
          state.loading = true;
        }
      )
      .addCase(
        deleteTodo.fulfilled,
        (state, action) => {
          state.todos = state.todos.filter(
            (el) => el.id !== action.payload
          );
          state.loading = false;
        }
      )
      .addCase(
        deleteTodo.rejected,
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        updateTodo.pending,
        (state, action) => {
          state.loading = true;
        }
      )
      .addCase(
        updateTodo.fulfilled,
        (state, action) => {
          state.todos.forEach((el) => {
            if (el.id === action.payload.id) {
              el.task = action.payload.task;
            }
          });
          state.loading = false;
        }
      )
      .addCase(
        updateTodo.rejected,
        (state, action) => {
          state.error = action.payload;
          state.loading = false;
        }
      );
  },
});

export default todoSlice.reducer;

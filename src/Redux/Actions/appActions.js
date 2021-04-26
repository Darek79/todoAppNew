import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_arg, {rejectWithValue}) => {
    const response = await fetch(
      "https://react.massivepixel.io/api/kloda.dariusz",
      {
        method: "GET",
        redirect: "follow",
      }
    );
    const parsed = await response.text();
    const data = JSON.parse(parsed);
    if (data.status === "error") {
      return rejectWithValue(data.message);
    }
    return data.data;
  }
);

export const saveTodo = createAsyncThunk(
  "todos/saveTodo",
  async (txt, {rejectWithValue}) => {
    const formdata = new FormData();
    formdata.append("task", txt);
    formdata.append("is_completed", 0);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const response = await fetch(
      "https://react.massivepixel.io/api/kloda.dariusz",
      requestOptions
    );
    const parsed = await response.text();
    const data = JSON.parse(parsed);
    if (data.status === "error") {
      return rejectWithValue(data.message);
    }
    return data.data[0];
  }
);

export const markCompleteTodo = createAsyncThunk(
  "todos/markComplete",
  async (dataSet, {rejectWithValue}) => {
    var formdata = new FormData();
    formdata.append("id", dataSet[0]);
    formdata.append("task", dataSet[1]);
    formdata.append("is_completed", dataSet[2]);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const response = await fetch(
      "https://react.massivepixel.io/api/kloda.dariusz",
      requestOptions
    );
    const parsed = await response.text();
    const data = JSON.parse(parsed);
    if (data.status === "error") {
      return rejectWithValue(data.message);
    }

    return {
      id: data.data[0].id,
      is_completed: data.data[0].is_completed,
    };
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (dataSet, {rejectWithValue}) => {
    var formdata = new FormData();
    formdata.append("id", dataSet[0]);
    formdata.append("task", dataSet[1]);
    formdata.append("is_completed", dataSet[2]);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    const response = await fetch(
      `https://react.massivepixel.io/api/kloda.dariusz/${dataSet[0]}`,
      requestOptions
    );
    const parsed = await response.text();
    const data = JSON.parse(parsed);
    if (data.status === "error") {
      return rejectWithValue(data.message);
    }
    return {
      id: data.data[0].id,
      task: data.data[0].task,
    };
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, {rejectWithValue}) => {
    var formdata = new FormData();
    formdata.append("id", id);
    var requestOptions = {
      method: "DELETE",
      body: formdata,
      redirect: "follow",
    };
    const response = await fetch(
      `https://react.massivepixel.io/api/kloda.dariusz/${id}`,
      requestOptions
    );
    const parsed = await response.text();
    const data = JSON.parse(parsed);
    if (data.status === "error") {
      return rejectWithValue(data.message);
    }

    return data.data.id;
  }
);

export const ADD_TODO_STARTED =
  "ADD_TODO_STARTED";
export const ADD_TODO_OK = "ADD_TODO_OK";
export const ADD_TODO_FAILURE =
  "ADD_TODO_FAILURE";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const RESET_TODO = "RESET_TODOS";

export const startedAddTodo = () => ({
  type: ADD_TODO_STARTED,
});
export const okAddTodo = (payload) => ({
  type: ADD_TODO_OK,
  loading: false,
  payload,
});
export const failureAddTodo = (error) => ({
  type: ADD_TODO_FAILURE,
  loading: false,
  error,
});

export const todoRemove = (id) => ({
  type: REMOVE_TODO,
  loading: false,
  id,
});

export const todoUpdate = ({id, text}) => ({
  type: UPDATE_TODO,
  id,
  text,
});
export const fetchFilesDB = (
  fnStart,
  fnOK,
  FNERR,
  dispatch
) => {
  return async () => {
    try {
      console.log(dispatch);
      dispatch(fnStart());
      const response = await fetch(
        "https://react.massivepixel.io/api/kloda.dariusz",
        {
          method: "GET",
          redirect: "follow",
        }
      );
      const parsed = await response.text();
      const checked = JSON.parse(parsed);
      console.log(checked.data);
      dispatch(fnOK(checked.data));
    } catch (error) {
      if (error) console.log(error);
      dispatch(FNERR(error.message));
    }
  };
};

export const sendFilesToDB = (
  fnOK,
  FNERR,
  data
) => {
  return async () => {
    try {
      var formdata = new FormData();
      formdata.append("task", data[0]);
      formdata.append("is_completed", "0");

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
      const checked = JSON.parse(parsed);
      // fnOK(checked.data);
    } catch (error) {
      if (error) console.log(error);
      // FNERR();
    }
  };
};

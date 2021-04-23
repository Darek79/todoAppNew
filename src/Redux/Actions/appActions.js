export const ADD_TODO = "ADD_TODO";
export const INIT_TODO = "INIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const RESET_TODO = "RESET_TODOS";

export const todo_add = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const todo_init = (payload) => ({
  type: INIT_TODO,
  payload,
});
export const todo_update = (payload) => ({
  type: UPDATE_TODO,
  payload,
});

export const fetchFilesDB = (fnOK, FNERR) => {
  return async () => {
    try {
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
      fnOK(checked.data);
    } catch (error) {
      if (error) console.log(error);
      FNERR();
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

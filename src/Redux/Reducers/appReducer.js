import {
  ADD_TODO_STARTED,
  ADD_TODO_OK,
  ADD_TODO_FAILURE,
  REMOVE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  RESET_TODO,
  INIT_TODO,
} from "./../Actions/appActions";

const init = {
  todos: [],
  loading: false,
  error: null,
};

export default function todoReducer(
  state = init,
  action
) {
  switch (action.type) {
    case ADD_TODO_STARTED:
      return {...state, loading: true};
    case ADD_TODO_OK:
      return {
        ...state,
        loading: true,
        todo: [...state.todo, action.payload],
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case REMOVE_TODO:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TODO:
      return {...state, update: action.update};
    case COMPLETE_TODO:
      return [];
    case RESET_TODO:
      return [];
    default:
      return state;
  }
}

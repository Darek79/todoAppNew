import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  COMPLETE_TODO,
  RESET_TODO,
  INIT_TODO,
} from "./../Actions/appActions";

const init = {todos: [], update: false};

export default function todoReducer(
  state = init,
  action
) {
  switch (action.type) {
    case INIT_TODO:
      return action.payload;
    case ADD_TODO:
      console.log(action);
      return {
        todos: [action.payload, ...state.todos],
      };
    case REMOVE_TODO:
      return [];
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

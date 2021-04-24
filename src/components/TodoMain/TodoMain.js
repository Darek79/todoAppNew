import {
  useDispatch,
  useSelector,
} from "react-redux";
import {useEffect} from "react";
import {
  startedAddTodo,
  fetchFilesDB,
  okAddTodo,
  failureAddTodo,
} from "./../../Redux/Actions/appActions";
import TodoItem from "./../TodoItem/TodoItem";
import AddItem from "./../AddItem/AddItem";
import "./todomain.scss";
export default function TodoMain() {
  const todos = useSelector(
    (state) => state.todos
  );
  const loading = useSelector(
    (state) => state.loading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispatch");
    fetchFilesDB(
      startedAddTodo,
      okAddTodo,
      failureAddTodo
    );
  }, [dispatch]);
  return (
    <section className='todo_main'>
      <AddItem />
      {console.log(todos, "main")}
      <div className='todo_main_item_wrapper'>
        {loading ? (
          todos.map((el, i) => (
            <TodoItem
              key={el.id}
              id={el.id}
              txt={el.task}
            />
          ))
        ) : (
          <div>loading</div>
        )}
      </div>
    </section>
  );
}

// const reduxStore = ({todoReducer}) => ({
//   todos: todoReducer,
// });

// export default connect(reduxStore, {
//   fetchFilesDB,
// })(TodoMain);

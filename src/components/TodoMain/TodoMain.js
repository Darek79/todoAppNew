import {
  useDispatch,
  useSelector,
} from "react-redux";
import {useEffect} from "react";
import TodoItem from "./../TodoItem/TodoItem";
import AddItem from "./../AddItem/AddItem";
import {Spinner} from "./../SVG/Spinner";
import {fetchTodos} from "./../../Redux/Actions/appActions";
import "./todomain.scss";
export default function TodoMain() {
  const {todos, loading} = useSelector(
    (state) => state.todoReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <section className='todo_main'>
      <AddItem />
      <div className='todo_main_item_wrapper'>
        {!loading ? (
          todos.map((el, i) => (
            <TodoItem
              key={el.id}
              id={el.id}
              txt={el.task}
              state={el.is_completed}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
}

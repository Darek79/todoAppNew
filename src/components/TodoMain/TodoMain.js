import {
  useDispatch,
  useSelector,
} from "react-redux";
import {useEffect} from "react";
import TodoItem from "./../TodoItem/TodoItem";
import AddItem from "./../AddItem/AddItem";
import {fetchTodos} from "./../../Redux/Slices/todoSlices";
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
      {console.log(todos, "main")}
      <div className='todo_main_item_wrapper'>
        {/* {todos.length > 0 &&
          todos.map((el, i) => (
            <TodoItem
              key={el.id}
              id={el.id}
              txt={el.task}
            />
          ))} */}
      </div>
    </section>
  );
}

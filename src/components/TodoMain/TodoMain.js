import {connect} from "react-redux";
import {useEffect} from "react";
import {
  todo_add,
  fetchFilesDB,
  todo_init,
} from "./../../Redux/Actions/appActions";
import TodoItem from "./../TodoItem/TodoItem";
import AddItem from "./../AddItem/AddItem";
import "./todomain.scss";
const TodoMain = ({
  todos,
  todo_init,
  fetchFilesDB,
}) => {
  useEffect(() => {
    fetchFilesDB(todo_init);
  }, []);
  return (
    <section className='todo_main'>
      <AddItem />
      {console.log(todos, "main")}
      <div className='todo_main_item_wrapper'>
        {todos.length > 0 &&
          todos.map((el, i) => (
            <TodoItem
              key={el.id}
              id={el.id}
              txt={el.task}
            />
          ))}
      </div>
    </section>
  );
};

const reduxStore = ({todoReducer}) => ({
  todos: todoReducer,
});

export default connect(reduxStore, {
  todo_add,
  todo_init,
  fetchFilesDB,
})(TodoMain);

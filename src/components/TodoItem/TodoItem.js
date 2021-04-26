import React, {useRef, useState} from "react";
import "./todoItem.scss";
import {Button} from "./../Button/Button";
import {MarkComplete} from "./../MarkComplete/MarkComplete";
import {useDispatch} from "react-redux";
import {
  deleteTodo,
  updateTodo,
} from "./../../Redux/Actions/appActions";
export default function TodoItem({
  txt,
  ind,
  id,
  state,
  isAllowed = true,
  rows = 50,
  placeholder = "",
}) {
  const dispatch = useDispatch();
  const textValueRef = useRef(txt);
  const [isDisabled, setDisabled] = useState(
    true
  );

  function changeDisabled() {
    setDisabled(false);
  }
  function btnSaveHandler() {
    dispatch(
      updateTodo([
        id,
        textValueRef.current.value,
        state,
      ])
    );
    setDisabled((p) => !p);
  }
  function cancelHandler() {
    setDisabled((p) => !p);
  }
  function deleteHandler() {
    dispatch(deleteTodo(id));
  }
  return (
    <section className='todo_wrapper'>
      {isAllowed ? (
        <MarkComplete
          id={id}
          state={state}
          txt={txt}
        />
      ) : undefined}

      <div
        className='todo_item_wrapper'
        onClick={changeDisabled}>
        {isDisabled}
        <textarea
          style={{
            textDecoration: `${
              state ? "line-through" : ""
            }`,
          }}
          placeholder={placeholder}
          data-index={ind}
          data-id={id}
          disabled={state ? true : isDisabled}
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck={false}
          rows={rows}
          cols={50}
          ref={textValueRef}
          defaultValue={txt}></textarea>
      </div>

      <div className='todo_btn_group'>
        {!isDisabled && isAllowed && !state ? (
          <Button
            txt='SAVE'
            fnClick={btnSaveHandler}
            cn='todo_btn'
          />
        ) : undefined}
        {!isDisabled && isAllowed ? (
          <Button
            txt='DELETE'
            cn='todo_btn'
            fnClick={deleteHandler}
          />
        ) : undefined}

        {!isDisabled && isAllowed ? (
          <Button
            txt='CANCEL'
            fnClick={cancelHandler}
            cn='todo_btn'
          />
        ) : undefined}
      </div>
    </section>
  );
}

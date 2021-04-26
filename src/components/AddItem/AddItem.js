import plus from "./../../Assets/Plus.svg";

import {useRef, useState} from "react";
import {Button} from "./../Button/Button";
import {useDispatch} from "react-redux";
import {saveTodo} from "./../../Redux/Actions/appActions";
import "./additem.scss";
export default function AddItem() {
  const dispatch = useDispatch();
  const textValueRef = useRef("");
  const [plusClick, setPlusClick] = useState(
    false
  );

  function clickOnPlus() {
    setPlusClick(true);
  }
  function captureClick() {
    dispatch(
      saveTodo(textValueRef.current.value)
    );
    textValueRef.current.value = "";
    setPlusClick((p) => !p);
  }
  return (
    <section className='todo_addItem'>
      <div
        className='todo_addItem_plus'
        onClick={clickOnPlus}>
        <img src={plus} alt='plus_sign' />
      </div>
      <div
        className={`todo_addItem_text ${
          !plusClick ? "hide_item" : "show_item"
        }`}>
        <textarea
          placeholder='note me!'
          data-id={0}
          disabled={false}
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck={false}
          rows={5}
          cols={50}
          ref={textValueRef}
        />
      </div>
      <Button
        txt='SUBMIT'
        cn={`todo_btn ${
          !plusClick ? "hide_item" : "show_item"
        }`}
        fnClick={captureClick}
      />
    </section>
  );
}

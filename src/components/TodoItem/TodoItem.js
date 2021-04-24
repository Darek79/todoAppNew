import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import "./todoItem.scss";
// type CompProps = {
//   txt?: string;
// };
import {connect} from "react-redux";
import {Button} from "./../Button/Button";
import {MarkComplete} from "./../MarkComplete/MarkComplete";
export default function TodoItem({
  txt,
  ind,
  id,
  isAllowed = true,
  rows = 50,
  placeholder = "",
}) {
  const textValueRef = useRef(txt);
  const defaultTxtRef = useRef(txt);
  const indexRef = useRef(ind);
  const [save, setSave] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [areaTxt, setAreaTxt] = useState(txt);
  const [isDisabled, setDisabled] = useState(
    true
  );

  useEffect(() => {
    if (updated) {
      setDisabled(true);
      console.log(defaultTxtRef.current);
    }
  }, [updated]);
  useEffect(() => {
    console.log("clicked");
  }, [areaTxt]);

  function changeHandler(e) {
    setAreaTxt(() => e.target.value);
  }

  //
  // when user clicks on field we unlock it
  //
  function changeDisabled() {
    console.log("turn on");
    setDisabled(false);
    // console.log(
    //   textValueRef.current.scrollHeight,
    //   defaultboxSizeRef.current
    // );
  }
  function btnSaveHandler(e) {
    console.log(e.target.getAttribute("data-id"));
    setSave(true);
    setDisabled((p) => !p);
  }
  function cancelHandler() {
    setAreaTxt(() => defaultTxtRef.current);
    setDisabled((p) => !p);
    console.log("cancel");
  }
  return (
    <section className='todo_wrapper'>
      {isAllowed ? (
        <MarkComplete indexRef={indexRef} />
      ) : undefined}

      <div
        className='todo_item_wrapper'
        onClick={changeDisabled}>
        <textarea
          placeholder={placeholder}
          data-index={ind}
          data-id={id}
          disabled={isDisabled}
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck={false}
          onChange={changeHandler}
          rows={rows}
          cols={50}
          ref={textValueRef}
          value={areaTxt}
        />
      </div>
      {!isDisabled && isAllowed ? (
        <div className='todo_btn_group'>
          <Button
            txt='SAVE'
            fnClick={btnSaveHandler}
            cn='todo_btn'
            id={id}
          />
          <Button
            txt='DELETE'
            cn='todo_btn'
            id={id}
          />
          <Button
            txt='CANCEL'
            fnClick={cancelHandler}
            cn='todo_btn'
          />
        </div>
      ) : undefined}
    </section>
  );
}

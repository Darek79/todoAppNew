import plus from "./../../Assets/Plus.svg";
import {connect} from "react-redux";
import {useRef, useState, useEffect} from "react";
import {Button} from "./../Button/Button";
import {
  todo_add,
  sendFilesToDB,
} from "./../../Redux/Actions/appActions";
import {v4} from "uuid";
import "./additem.scss";
const AddItem = ({todo_add, sendFilesToDB}) => {
  const textValueRef = useRef("");
  const [plusClick, setPlusClick] = useState(
    false
  );
  const [sendData, setSendData] = useState(false);

  useEffect(() => {
    if (sendData) {
      sendFilesToDB(
        todo_add,
        setPlusClick,
        [textValueRef.current.value]
      );
      textValueRef.current.value = "";
      setSendData(false);
    }
  }, [sendData]);
  function clickOnPlus() {
    setPlusClick(true);
  }
  function captureClick() {
    setSendData(true);
    console.log(textValueRef.current.value);
    // todo_add({
    //   task: textValueRef.current.value,
    //   is_completed: 0,
    // });

    setPlusClick(false);
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
};

export default connect(null, {
  todo_add,
  sendFilesToDB,
})(AddItem);

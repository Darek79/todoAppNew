import checkMark from "./../../Assets/check.svg";
import {memo} from "react";
import "./markComplete.scss";
export const MarkComplete = memo(({indexRef}) => {
  return (
    <div
      data-index={indexRef.current}
      className='todo_checkMark'>
      <img
        src={checkMark}
        alt='checkMark'
        className='todo_checkMark_item'
      />
    </div>
  );
});

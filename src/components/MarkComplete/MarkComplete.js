import {memo} from "react";
import "./markComplete.scss";
import {Check} from "./../SVG/Check";
import {Plus} from "./../SVG/Plus";
import {useDispatch} from "react-redux";
import {markCompleteTodo} from "./../../Redux/Actions/appActions";
export const MarkComplete = memo(
  ({id, txt, state}) => {
    const dispatch = useDispatch();
    function markComplete() {
      const completed = state ? 0 : 1;
      dispatch(
        markCompleteTodo([id, txt, completed])
      );
    }
    return (
      <div
        onClick={markComplete}
        className='todo_checkMark'>
        {state ? (
          <Plus classSvg='todo_checkMark_item todo_checkMark_done' />
        ) : (
          <Check classSvg='todo_checkMark_item' />
        )}
      </div>
    );
  }
);

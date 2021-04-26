// type ButtonProps = {
//   txt: string;
//   cn: string;
//   fnClick: () => void;
//   disabled: boolean;
// };
import {memo} from "react";
import "./button.scss";

export const Button = memo(
  ({txt, cn, fnClick, disabled}) => {
    return (
      <button
        className={`${cn} ripple`}
        onClick={fnClick}
        disabled={disabled}>
        {txt}
      </button>
    );
  }
);

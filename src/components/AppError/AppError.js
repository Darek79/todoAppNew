import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {Button} from "./../Button/Button";
import "./appError.scss";
export const AppError = () => {
  const {error} = useSelector(
    (state) => state.todoReducer
  );
  const [isError, setError] = useState(false);
  useEffect(() => {
    if (error !== null) {
      setError((p) => !p);
    }
  }, [error]);

  function clearErrorHandler() {
    setError((p) => !p);
    window.location.reload();
  }
  return (
    <>
      {isError ? (
        <section className='appError'>
          <div className='appError_group'>
            <p>Sorry a Error occurred</p>
            <Button
              txt='RELOAD'
              fnClick={clearErrorHandler}
              cn='todo_btn appError_btn'
            />
          </div>
        </section>
      ) : undefined}
    </>
  );
};

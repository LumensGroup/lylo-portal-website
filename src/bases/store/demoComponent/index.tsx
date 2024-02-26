import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { decrement, increment, setMessage } from "../reducers/count";

const YourComponent: React.FC = () => {
  const { count, message } = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeMessage = () => {
    dispatch(setMessage("New message"));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleChangeMessage}>Change Message</button>
    </div>
  );
};

export default YourComponent;

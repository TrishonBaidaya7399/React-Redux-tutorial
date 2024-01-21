import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../CounterRedux/action/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button disabled={count === 0} onClick={handleDecrement}>
          Decrement
        </button>
        <button disabled={count === 0} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;

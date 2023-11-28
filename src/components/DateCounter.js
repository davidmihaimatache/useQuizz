import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "increment":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown action");
  }
}
function DateCounter() {
  // const [count, setCount] = useState(0);

  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [step, setStep] = useState(1);
  const { count, step } = state;
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const decrement = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "decrement" });
  };

  const increment = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "increment" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={increment}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

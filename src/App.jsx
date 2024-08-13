import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, subCounter } from "./Redux/features/counter/counterSlice";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const operationStyle =
    counter.OprationType === "Addition" ? "text-green-500" : "text-red-500";

  return (
    <>
      <div className="flex gap-3 items-center text-lg">
        <button
          disabled={counter.value >= 10}
          className={`btn ${counter.value >= 10 ? "cursor-not-allowed" : ""}`}
          onClick={() => {
            dispatch(addCounter());
          }}
        >
          +
        </button>
        <div className="bg-amber-500 py-2 px-4 rounded">{counter.value}</div>
        <span>
          Operation Type :
          <span className={operationStyle}> {counter.OprationType}</span>
        </span>
        <button
          disabled={counter.value <= 0}
          className={`btn ${counter.value <= 0 ? "cursor-not-allowed" : ""}`}
          onClick={() => {
            dispatch(subCounter());
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;

import { useSelector, useDispatch } from "react-redux";
import {
  CounterState,
  increment,
  decrement,
} from "./features/counter/counterSlice";
import { Link } from "react-router-dom";

const About = () => {
  const useCountSelector = useSelector.withTypes<CounterState>();
  const count = useCountSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;

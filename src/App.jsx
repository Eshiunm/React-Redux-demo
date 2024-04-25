import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counter/slice";

function App() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App;

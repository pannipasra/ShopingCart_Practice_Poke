import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)

  const incHandler=()=>{
    dispatch(counterActions.inc())
  }

  const incByAmount=()=>{
    dispatch(counterActions.incByAmount(10))

  }

  const decHandler=()=>{
    dispatch(counterActions.dec())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={incByAmount}>+10</button>
        <button onClick={decHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

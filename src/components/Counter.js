import { useSelector,useDispatch } from 'react-redux';
import { counterAction } from '../store/increment-context';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch=useDispatch();

  const counter=useSelector(state=>state.counter.counter);
  const show=useSelector(state=>state.counter.showCounter);

  const incrementHandler=()=>{
    dispatch(counterAction.increment());
  };

  const incrementBy5Handler=()=>{
    dispatch(counterAction.increase(5));
  };

  const decrementHandler=()=>{
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>  {counter} </div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementBy5Handler}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

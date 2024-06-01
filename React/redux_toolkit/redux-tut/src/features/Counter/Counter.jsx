import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,incrementByAmount,decrementByAmount } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <br></br>
        <button onClick={() => dispatch(incrementByAmount(100))}>INCREMENT BY 100</button>
        <button onClick={() => dispatch(decrementByAmount(100))}>DECREMENT BY 100</button>
      </div>
    </div>
  );
}

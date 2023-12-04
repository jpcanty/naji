import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";

import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <div
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </div>
    </div>
  );
}

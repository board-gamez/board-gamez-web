"use client";

import { useState } from "react";

interface InputProps {
  max: number;
}

export default function NumberInput({ max = 10 }: InputProps) {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (max > count) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (1 < count) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-centers border rounded-lg bg-dark-gray">
      <button className="size-8 rounded-s-lg" onClick={increase}>
        +
      </button>

      <div className="size-8 flex items-center justify-center">{count}</div>

      <button className="size-8 rounded-e-lg" onClick={decrease}>
        -
      </button>
    </div>
  );
}

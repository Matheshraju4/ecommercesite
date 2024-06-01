"use client";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const Counter = ({
  quantity,
  setCounter,
}: {
  quantity: number;
  setCounter: (value: number) => void;
}) => {
  const [counter, setcounter] = useState(quantity);

  function minus() {
    if (counter > 1) {
      setcounter(counter - 1);
    } else {
      setcounter(1);
    }
  }
  useEffect(() => {
    setCounter(counter);
  }, [counter]);

  return (
    <div className="max-w-sm  ">
      <h1 className="text-sm   mb-2">Quantity</h1>
      <div className="flex justify-center items-center bg-slate-300 w-40 mx-auto border-2 rounded-sm border-slate-400 max-h-8">
        <Minus
          className="cursor-pointer mr-2   "
          strokeWidth={1}
          onClick={minus}
        />
        <div className="p-1 px-6  rounded-sm  text-center">{counter}</div>
        <Plus
          className="cursor-pointer ml-2"
          strokeWidth={1}
          onClick={() => setcounter(counter + 1)}
        />
      </div>
    </div>
  );
};

export default Counter;

"use client";
import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

const CheckOutCounter = ({
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
    <div className="max-w-15  flex justify-center items-center md:max-w-sm">
      <div className="flex justify-center items-center  w-40 mx-auto    max-h-8">
        <Minus
          className="cursor-pointer mr-2   "
          strokeWidth={1}
          onClick={minus}
        />
        <div className="p-3 px-5  text-center bg-slate-200 border-2 border-slate-500 rounded-full">
          {counter}
        </div>
        <Plus
          className="cursor-pointer ml-2"
          strokeWidth={1}
          onClick={() => setcounter(counter + 1)}
        />
      </div>
    </div>
  );
};

export default CheckOutCounter;

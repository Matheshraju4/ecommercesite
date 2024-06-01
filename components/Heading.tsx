import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="shadow-md ">
      <div className="md:text-7xl text-3xl pt-20 pb-20 p-10 font-extrabold flex flex-col justify-center text-center md:p-40">
        <h1 className="">Welcome to Nextjs Shop</h1>
        <div className="mt-3 md:mt-5">
          <Button className=" pt-5 pb-5 text-sm  md:pt-7 md:pb-7 md:pl-9 md:pr-9 bg-blue-700 md:text-2xl   hover:bg-blue-800 rounded-lg ">
            Trending Products
            <ArrowRight
              className="ml-3 md:ml-5 w-6 h-6 md:w-9 md:h-9"
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heading;

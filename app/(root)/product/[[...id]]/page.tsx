import Counter from "@/components/Counter";
import ProductPage from "@/components/ProductPage";

import React from "react";
const product = {
  productname: "Nick Air Max Pro 8888 - Super Light",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
  actualprice: "$138.99",
  previousprice: "$238.99",
  ratings: "4.8",
  imgurls: [
    "https://utfs.io/f/3f7ed370-2b55-4239-b40a-50ce8e2867e1-i97hri.jpg",
    "https://utfs.io/f/c6a98e3c-7b9d-431a-8af9-867440cb559d-nliseh.jpeg",
    "https://utfs.io/f/2c11568d-8408-45e8-9001-45edb0dbbdf7-1f.png",
  ],
};

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      {/* {`This is the Id: ${params.id}`} */}
      <ProductPage product={product} />
    </div>
  );
};

export default page;

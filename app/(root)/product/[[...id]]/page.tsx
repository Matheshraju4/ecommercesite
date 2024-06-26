"use client";

import Counter from "@/components/Counter";
import ProductPage from "@/components/ProductPage";
import { getproductUsingId } from "@/lib/database/fetch";
import axios from "axios";

import React, { useEffect, useState } from "react";
// const product = {
//   productname: "Nick Air Max Pro 8888 - Super Light",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia",
//   actualprice: "$138.99",
//   previousprice: "$238.99",
//   ratings: "4.8",
//   imgurls: [
//     "https://utfs.io/f/3f7ed370-2b55-4239-b40a-50ce8e2867e1-i97hri.jpg",
//     "https://utfs.io/f/c6a98e3c-7b9d-431a-8af9-867440cb559d-nliseh.jpeg",
//     "https://utfs.io/f/2c11568d-8408-45e8-9001-45edb0dbbdf7-1f.png",
//   ],
// };

interface Productpageprops {
  productname: string;
  description: string;
  id: Number;
  actualprice: string;
  previousprice: string;
  ratings: string;
  imgurls: string[];
}
const page = ({ params }: { params: { id: string } }) => {
  const productid = params.id;
  const [product, setproduct] = useState<Productpageprops | null>(null);
  useEffect(() => {
    async function createUser() {
      const id = productid[0];
      const products = await getproductUsingId(id);
      if (products !== "Something went wrong") {
        setproduct(products || null);
      }

      console.log("products", products);
    }
    createUser();
  }, []);
  return (
    <div>
      {/* {`This is the Id: ${params.id}`} */}
      {product ? <ProductPage product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default page;

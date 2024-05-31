import CheckoutPage from "@/components/CheckOut";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductComponent";
import ProductPage from "@/components/ProductPage";
import React from "react";

const page = () => {
  const product = [
    {
      productname: " Nike Air Max Pro 8888 - Super Light",
      actualprice: "$138.99",
      previousprice: "$238.99",
    },
    {
      productname: " Nike Air Max Pro 8888 - Super Light",
      actualprice: "$138.99",
      previousprice: "$238.99",
    },
    {
      productname: " Nike Air Max Pro 8888 - Super Light",
      actualprice: "$138.99",
      previousprice: "$238.99",
    },
    {
      productname: " Nike Air Max Pro 8888 - Super Light",
      actualprice: "$138.99",
      previousprice: "$238.99",
    },
    {
      productname: " Nike Air Max Pro 8888 - Super Light",
      actualprice: "$138.99",
      previousprice: "$238.99",
    },
  ];
  return (
    <div>
      <Navbar />
      <Heading />

      <h1 className="text-2xl ml-4 mt-9 ">Available Products</h1>
      <ProductCard product={product} />
    </div>
  );
};

export default page;

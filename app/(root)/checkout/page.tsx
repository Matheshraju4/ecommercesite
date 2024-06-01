"use client";

import CheckoutPage from "@/components/CheckOut";
import React, { useEffect, useState } from "react";

const page = () => {
  const [cart, setcart] = useState<CheckoutPageProps[]>([]);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setcart(JSON.parse(cart));
    }
  }, []);
  console.log("cart", cart);
  return (
    <div>
      <p>This is the Checkout Page</p>

      <CheckoutPage />
    </div>
  );
};

export default page;

interface CheckoutPageProps {
  id: Number;
  quantity: string;
}

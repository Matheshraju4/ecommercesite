"use client";

import CheckoutPage from "@/components/CheckOut";
import CheckOutCounter from "@/components/CheckOutCounter";
import { getCartItemById } from "@/lib/database/fetch";
import React, { useEffect, useState } from "react";
interface CheckoutProps {
  id: number;
  productName: string;

  actualPrice: number;
  previousPrice: number;
  imgUrls: string[];
}
const page = () => {
  const [cart, setcart] = useState<CheckoutPageProps[]>([]);
  const [cartItems, setcartItems] = useState<CheckoutProps[]>([]);

  useEffect(() => {
    const carts = localStorage.getItem("cart");
    let idsArray: number[];
    console.log("cartonlocalstorage", carts);
    if (carts) {
      setcart(JSON.parse(carts));
      idsArray = JSON.parse(carts).map((item: CheckoutPageProps) => item.id);
    }

    async function call() {
      const cartItems = await getCartItemById(idsArray);
      if (cartItems) {
        setcartItems(cartItems);
      }
    }
    call();
  }, []);

  return (
    <div>
      <CheckoutPage cartItems={cartItems} />
    </div>
  );
};

export default page;

interface CheckoutPageProps {
  id: number;
  quantity: string;
}

"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function getproductUsingId(id: string) {
  try {
    const products = await prisma.product.findFirst({
      where: {
        id: Number(id),
      },
    });
    if (products) {
      const {
        id,
        productName,
        productId,
        description,
        actualPrice,
        previousPrice,
        imgUrls,
      } = products;

      const product = {
        id: id,
        productname: productName,
        description: description,
        actualprice: actualPrice.toString(),
        previousprice: previousPrice.toString(),
        ratings: "4.8",
        imgurls: [
          "https://utfs.io/f/3f7ed370-2b55-4239-b40a-50ce8e2867e1-i97hri.jpg",
          "https://utfs.io/f/c6a98e3c-7b9d-431a-8af9-867440cb559d-nliseh.jpeg",
          "https://utfs.io/f/2c11568d-8408-45e8-9001-45edb0dbbdf7-1f.png",
        ],
      };
      return product;
    }
  } catch (error) {
    console.log("Failed to retrieve product:", error);
    return "Something went wrong";
  }
}

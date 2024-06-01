"use server";

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function createProduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const product = await prisma.product.create({
    data: {
      productName: "Redmi Note 7 Pro",
      actualPrice: 2000,
      previousPrice: 2500,
      description: "Redmi Note 7 Pro is the best phone in the world for gaming",
      imgUrls: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
    },
  });
  res.json({ product });
}

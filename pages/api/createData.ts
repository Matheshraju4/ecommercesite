// pages/api/createData.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        userName: `user${Math.random()}`,
        phoneNumber: `${Math.random()}`,
      },
    });
    const product = await prisma.product.create({
      data: {
        productName: `product${Math.random()}`,
        description: `product${Math.random()}`,
        actualPrice: parseFloat((Math.random() * 100).toFixed(2)),
        previousPrice: parseFloat((Math.random() * 100).toFixed(2)),
        imgUrls: [
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
        ],
      },
    });
    res.status(200).json({ user, product });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
}

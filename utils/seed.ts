"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createEveryThing() {
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
      actualPrice: Number(`${Math.random()}`),
      previousPrice: Number(`${Math.random()}`),
      imgUrls: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
    },
  });
  return { user, product };
}

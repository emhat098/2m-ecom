import prisma from "@/db";
import { cache } from "react";

const getProduct = cache(async (id: number) => {
  const products = await prisma.product.findFirst({
    where: { id },
    include: { category: true },
  });
  return products;
});

export default getProduct;

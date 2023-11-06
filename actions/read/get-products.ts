import prisma from "@/db";
import { cache } from "react";

const getProducts = cache(async () => {
  const products = await prisma.product.findMany({
    include: { category: true },
  });
  return products;
});

export default getProducts;

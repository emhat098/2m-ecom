import type { Category, Product } from "@prisma/client";

export interface ProductType extends Product {
  category: Category;
}

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.create({
    data: {
      name: "Category 1",
      description: "Category description 1",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Category 2",
      description: "Category description 2",
    },
  });

  const products = await prisma.product.createMany({
    data: [
      {
        name: "Product 1",
        description: "Product description 1",
        categoryId: category1.id,
      },
      {
        name: "Product 2",
        description: "Product description 2",
        categoryId: category2.id,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

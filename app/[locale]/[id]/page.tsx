import getProduct from "@/actions/read/get-product";
import { ProductItemSkeleton } from "@/components/product/ProductItem";
import { Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ProductItem = dynamic(() => import("@/components/product/ProductItem"), {
  ssr: false,
  loading: () => <ProductItemSkeleton />,
});

interface ProductPagePrams {
  params: {
    id: number;
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPagePrams) {
  const product = await getProduct(Number(id));
  const data = JSON.parse(JSON.stringify(product));
  return (
    <div>
      <Heading as={"h1"} fontSize={"3xl"} textAlign={"center"} padding={10}>
        Product page
      </Heading>
      <div className="product">
        <ProductItem product={data} />
      </div>
    </div>
  );
}

import getProducts from "@/actions/read/get-products";
import { ProductItemSkeleton } from "@/components/product/ProductItem";
import { ProductType } from "@/models/Product";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProductItem = dynamic(() => import("@/components/product/ProductItem"), {
  ssr: false,
  loading: () => <ProductItemSkeleton />,
});

export default async function Home() {
  const products = await getProducts();
  const data = JSON.parse(JSON.stringify(products || ""));
  if (!data) return notFound();

  return (
    <div className="product-list">
      {data.map((product: ProductType) => (
        <Link key={product.id} href={"/" + product.id}>
          <ProductItem product={product} />
        </Link>
      ))}
    </div>
  );
}

import getProduct from "@/actions/read/get-product";
import ProductItem from "@/components/product/ProductItem";
import { ProductType } from "@/models/Product";

export default async function Home() {
  const products = await getProduct();
  const data = JSON.parse(JSON.stringify(products));
  return (
    <div className="product-list">
      {data.map((product: ProductType) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

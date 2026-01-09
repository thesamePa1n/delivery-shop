import { getProducts } from "../api/product.api";
import AllProducts from "./AllProducts";

export default async function AllProductsServer({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const products = await getProducts(category);

  return <AllProducts title={title} category={category} products={products} />;
}

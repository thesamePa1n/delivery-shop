import { shuffleArray } from "@/lib/utils";
import { getProducts } from "../api/product.api";
import ProductsClient from "./Product.client";

type Props = {
  title: string;
  rightTitle: string;
  category: string;
  href: string;
};

const Products = async ({ title, rightTitle, category, href }: Props) => {
  const products = await getProducts(category);
  if (!products) {
    return <div>Ошибка в получении продуктов</div>;
  }

  const filteredProducts = shuffleArray(products)
    .filter((item) => item.categories.includes(category))
    .slice(0, 4);

  return (
    <ProductsClient
      title={title}
      rightTitle={rightTitle}
      href={href}
      products={filteredProducts}
    />
  );
};

export default Products;

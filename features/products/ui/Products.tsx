import { getProducts } from "../api/product.api";
import ProductsClient from "./Product.client";
import { CONFIG } from "@/shared/config/config";

type Props = {
  title: string;
  rightTitle: string;
  category: string;
  href: string;
};

const Products = async ({ title, rightTitle, category, href }: Props) => {
  const products = await getProducts(category, {
    randomLimit: CONFIG.ITEMS_PER_PAGE_MAIN_PRODUCTS,
  });
  if (!products) {
    return <div>Ошибка в получении продуктов</div>;
  }

  const filteredProducts = products.filter((item) =>
    item.categories.includes(category)
  );

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

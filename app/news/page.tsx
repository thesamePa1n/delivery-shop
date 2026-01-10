import AllProductsServer from "@/features/products/ui/AllProductsServer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новинки магазина Северяночка",
  description: "Новые товары магазина",
};

const NewsPage = async () => {
  return <AllProductsServer title="Все новинки" category="new" />;
};

export default NewsPage;

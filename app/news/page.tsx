import AllProductsServer from "@/features/products/ui/AllProductsServer";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новинки магазина Северяночка",
  description: "Новые товары магазина",
};

const NewsPage = async () => {
  return (
    <div className="max-w-302 mx-auto px-4">
      <Breadcrumbs
        links={[
          {
            title: "Главная",
            href: "/",
          },
        ]}
        pageTitle="Все новинки"
      />
      <AllProductsServer title="Все новинки" category="new" />;
    </div>
  );
};

export default NewsPage;

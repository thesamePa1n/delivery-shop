import AllProductsServer from "@/features/products/ui/AllProductsServer";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Акции магазина Северяночка",
  description: "Акционные товары магазина",
};

const ActionsPage = async () => {
  return (
    <div className="max-w-302 mx-auto px-4">
      <Breadcrumbs
        links={[
          {
            title: "Главная",
            href: "/",
          },
        ]}
        pageTitle="Все акции"
      />
      <AllProductsServer title="Все акции" category="actions" />
    </div>
  );
};

export default ActionsPage;

import AllProductsServer from "@/features/products/ui/AllProductsServer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Акции магазина Северяночка",
  description: "Акционные товары магазина",
};

const ActionsPage = async () => {
  return <AllProductsServer title="Все акции" category="actions" />;
};

export default ActionsPage;

import AllPurchasesServer from "@/features/users/ui/AllPurchasesServer";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ваши покупки",
  description: "Ваши покупки в магазине Северяночка",
};

const PurchasesPage = async () => {
  return (
    <div className="max-w-302 mx-auto px-4">
      <Breadcrumbs
        links={[
          {
            title: "Главная",
            href: "/",
          },
        ]}
        pageTitle="Все покупки"
      />
      <AllPurchasesServer />
    </div>
  );
};

export default PurchasesPage;

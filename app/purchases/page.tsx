import AllPurchasesServer from "@/features/users/ui/AllPurchasesServer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ваши покупки",
  description: "Ваши покупки в магазине Северяночка",
};

const PurchasesPage = async () => {
  return <AllPurchasesServer />;
};

export default PurchasesPage;

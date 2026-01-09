import { getPurchases } from "../api/user.api";
import AllPurchases from "./AllPurchases";

const AllPurchasesServer = async () => {
  const purchases = await getPurchases();

  return <AllPurchases purchases={purchases} title="Все покупки" />;
};

export default AllPurchasesServer;

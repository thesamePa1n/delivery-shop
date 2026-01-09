import Card from "@/shared/ui/Card";
import { getPurchases } from "../api/user.api";

const AllPurchases = async ({ title }: { title: string }) => {
  const purchases = await getPurchases();

  return (
    <div className="max-w-302 mx-auto px-4">
      <h3 className="text-onSurface font-bold text-4xl leading-[150%] mb-10">
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-10">
        {purchases.map((item) => (
          <Card key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AllPurchases;

import Card from "@/shared/ui/Card";
import { getProducts } from "../api/product.api";

const AllProducts = async ({
  title,
  category,
}: {
  title: string;
  category: string;
}) => {
  const products = await getProducts(category);

  return (
    <div className="max-w-302 mx-auto px-4">
      <h3 className="text-onSurface font-bold text-4xl leading-[150%] mb-10">
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-10">
        {products
          .filter((item) => item.categories.includes(category))
          .map((item) => (
            <Card key={item._id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;

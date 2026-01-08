import ChevronRight from "@/shared/icons/ChevronRight";
// import products from "@/migrations/productsDatabase.json";
import Card from "@/shared/ui/Card";
import { IProductCard } from "../types/product";
import { shuffleArray } from "@/lib/utils";

type Props = {
  title: string;
  rightTitle: string;
  category: string;
};

const Products = async ({ title, rightTitle, category }: Props) => {
  let products: IProductCard[] = [];
  let error = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=${category}`
    );
    products = await res.json();
    products = shuffleArray(products)
  } catch (err) {
    error = "ошибка получения продуктов";
    console.error("Ошибка в компоненте Products", err);
  }

  if (error) {
    return <div className="text-palette-error">{error}</div>;
  }

  return (
    <section className="mb-30">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-onSurface font-bold text-4xl leading-[150%]">
          {title}
        </h3>
        <button className="flex items-center gap-2">
          <span className="text-grayscale-hardest text-base leading-[150%]">
            {rightTitle}
          </span>
          <ChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {products
          .filter((item) => item.categories.includes(category))
          .slice(0, 4)
          .map((item) => (
            <Card key={item._id} {...item} />
          ))}
      </div>
    </section>
  );
};

export default Products;

import ChevronRight from "@/shared/icons/ChevronRight";
import products from "@/migrations/productsDatabase.json";
import Card from "@/shared/ui/Card";

type Props = {
  title: string;
  rightTitle: string;
  category: string;
};

const Products = ({ title, rightTitle, category }: Props) => {
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
      <div className="grid grid-cols-4 gap-4">
        {products
          .filter((item) => item.categories.includes(category))
          .slice(0, 4)
          .map((item) => (
            <Card key={item.id} {...item} />
          ))}
      </div>
    </section>
  );
};

export default Products;

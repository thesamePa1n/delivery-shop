import ChevronRight from "@/shared/icons/ChevronRight";
import Card from "@/shared/ui/Card";
import { IProductCard } from "@/shared/types/product";
import Link from "next/link";

type Props = {
  title: string;
  rightTitle: string;
  href: string;
  products: IProductCard[];
};

const ProductsClient = ({ title, rightTitle, href, products }: Props) => {

  return (
    <section className="mb-30">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-onSurface font-bold text-4xl leading-[150%]">
          {title}
        </h3>
        <Link
          href={href} 
          className="flex items-center gap-2" 
        >
          <span className="text-grayscale-hardest text-base leading-[150%]">
            {rightTitle}
          </span>
          <ChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {products.map((item) => (
          <Card key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductsClient;
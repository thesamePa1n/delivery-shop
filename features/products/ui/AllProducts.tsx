"use client";

import { usePagination } from "@/shared/hooks/usePagination";
import Paginate from "@/shared/ui/Paginate";
import Card from "@/shared/ui/Card";
import { IProductCard } from "@/shared/types/product";

export default function AllProducts({
  title,
  category,
  products,
}: {
  title: string;
  category: string;
  products: IProductCard[];
}) {
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(products, 6);

  const filtered = currentItems.filter((item) =>
    item.categories.includes(category)
  );

  return (
    <div className="max-w-302 mx-auto px-4">
      <h3 className="text-onSurface font-bold text-4xl leading-[150%] mb-10">
        {title}
      </h3>

      <div className="grid grid-cols-4 gap-10">
        {filtered.map((item) => (
          <Card key={item._id} {...item} />
        ))}
      </div>

      <Paginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

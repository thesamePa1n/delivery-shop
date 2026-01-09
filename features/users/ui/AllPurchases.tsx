"use client";

import Card from "@/shared/ui/Card";
import { usePagination } from "@/shared/hooks/usePagination";
import { IProductCard } from "@/shared/types/product";
import Paginate from "@/shared/ui/Paginate";

const AllPurchases = ({
  title,
  purchases,
}: {
  title: string;
  purchases: IProductCard[];
}) => {
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(purchases, 6);

  return (
    <div className="max-w-302 mx-auto px-4">
      <h3 className="text-onSurface font-bold text-4xl leading-[150%] mb-10">
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-10">
        {currentItems.map((item) => (
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
};

export default AllPurchases;

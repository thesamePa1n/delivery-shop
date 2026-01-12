"use client";

import { usePagination } from "@/shared/hooks/usePagination";
import Paginate from "@/shared/ui/Paginate";
import Card from "@/shared/ui/Card";
import { IProductCard } from "@/shared/types/product";
import { useRouter, useSearchParams } from "next/navigation";
import { CONFIG } from "@/shared/config/config";

export default function AllProducts({
  title,
  category,
  products,
}: {
  title: string;
  category: string;
  products: IProductCard[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") || "1");

  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(products, CONFIG.ITEMS_PER_PAGE, pageFromUrl);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }

    router.push(`?${params.toString()}`, { scroll: true });
  };

  const filtered = currentItems.filter((item) =>
    item.categories.includes(category)
  );

  return (
    <>
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
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
      />
    </>
  );
}

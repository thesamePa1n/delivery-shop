"use client";

import { usePagination } from "@/shared/hooks/usePagination";
import { IArticle } from "@/shared/types/articles";
import Article from "@/shared/ui/Article";
import Paginate from "@/shared/ui/Paginate";
import { useRouter, useSearchParams } from "next/navigation";

const AllArticles = ({
  title,
  articles,
}: {
  title: string;
  articles: IArticle[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") || "1");
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(articles, 6, pageFromUrl);

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

  return (
    <>
      <h3 className="text-onSurface font-bold text-4xl leading-[150%] mb-10">
        {title}
      </h3>

      <div className="grid grid-cols-3 gap-10">
        {currentItems.map((item) => (
          <Article key={item._id} {...item} />
        ))}
      </div>

      <Paginate
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
      />
    </>
  );
};

export default AllArticles;

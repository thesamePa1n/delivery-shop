"use client";

import { usePagination } from "@/shared/hooks/usePagination";
import { IArticle } from "@/shared/types/articles";
import Article from "@/shared/ui/Article";
import Paginate from "@/shared/ui/Paginate";

const AllArticles = ({
  title,
  articles,
}: {
  title: string;
  articles: IArticle[];
}) => {
  const { currentItems, currentPage, setCurrentPage, totalPages } =
    usePagination(articles, 6);

  return (
    <div className="max-w-302 mx-auto px-4">
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
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AllArticles;

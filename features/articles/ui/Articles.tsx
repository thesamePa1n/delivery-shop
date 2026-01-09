import ChevronRight from "@/shared/icons/ChevronRight";
import Article from "@/shared/ui/Article";
import { getArticles } from "../api/articles.api";
import Link from "next/link";

const Articles = async () => {
  const articles = await getArticles()

  return (
    <div className="">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-onSurface font-bold text-4xl leading-[150%]">
          Статьи
        </h3>
        <Link href="/articles" className="flex items-center gap-2">
          <span className="text-grayscale-hardest text-base leading-[150%]">
            Все статьи
          </span>
          <ChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {articles.slice(0, 3).map((item) => (
          <Article key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Articles;

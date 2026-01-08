import ChevronRight from "@/shared/icons/ChevronRight";
import articles from "@/migrations/articlesDatabase.json";
import Article from "@/shared/ui/Article";

const Articles = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-onSurface font-bold text-4xl leading-[150%]">
          Статьи
        </h3>
        <button className="flex items-center gap-2">
          <span className="text-grayscale-hardest text-base leading-[150%]">
            Все статьи
          </span>
          <ChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {articles.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Articles;

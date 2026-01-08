import ChevronRight from "@/shared/icons/ChevronRight";
import Article from "@/shared/ui/Article";
import { IArticle } from "@/shared/types/articles";

const Articles = async () => {
  let articles: IArticle[] = []
  let error = null

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/articles`)
    articles = await res.json()
  } catch (err) {
    error = 'ошибка получения статей'
    console.error('Ошибка в компоненте Article', err)
  }

  if (error) {
    return <div className="text-palette-error">{error}</div>
  }

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
        {articles.slice(0, 3).map((item) => (
          <Article key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Articles;

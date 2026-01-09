import { getArticles } from "../api/articles.api";
import Article from "@/shared/ui/Article";

const AllArticles = async ({ title }: { title: string }) => {
  const articles = await getArticles();

  return (
    <div className="max-w-302 mx-auto px-4">
      <h3 className="text-onSurface font-bold text-4xl leading-[150%] mb-10">
        {title}
      </h3>

      <div className="grid grid-cols-3 gap-10">
        {articles.slice(0, 3).map((item) => (
          <Article key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AllArticles;

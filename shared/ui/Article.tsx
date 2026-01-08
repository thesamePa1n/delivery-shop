import Image from "next/image";
import { IArticle } from "../types/articles";
import { formatToRuDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Article = ({ createdAt, img, text, title }: IArticle) => {
  return (
    <article className="flex flex-col rounded-sm bg-onPrimary shadow-default-xs transition-shadow duration-200 hover:shadow-primary-m">
      <Image src={img} alt="article" width={376} height={162} />
      <div className="flex flex-col gap-2.5 p-2.5 flex-1">
        <p className="text-grayscale-hard text-xs leading-[150%]">
          {formatToRuDate(createdAt)}
        </p>
        <h3 className="text-onSurface font-bold text-lg leading-[150%]">
          {title}
        </h3>
        <p className="text-onSurface text-base leading-[150%]">{text}</p>
        <Button className="rounded-sm bg-[#E5FFDE] w-37.5 h-10 text-secondary hover:bg-secondary hover:text-secondary-text font-normal text-base leading-[150%] mt-auto">
          Подробнее
        </Button>
      </div>
    </article>
  );
};

export default Article;

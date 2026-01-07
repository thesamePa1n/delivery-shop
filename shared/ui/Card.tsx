import Image from "next/image";
import Heart from "../icons/Heart";
import { Button } from "@/components/ui/button";
import Star from "../icons/Star";

const Card = () => {
  return (
    <div className="w-68 rounded-sm cursor-pointer shadow-default-s bg-onPrimary transition-shadow duration-200 hover:shadow-primary-m">
      <div className="relative">
        <Image src="/card.png" alt="карточка" width={272} height={160} />
        <button className="absolute right-2 top-2">
          <Heart />
        </button>
        <span className="absolute rounded-sm left-2.5 bottom-2.5 text-onPrimary text-base leading-[150%] w-14 h-8 bg-primary flex items-center justify-center">
          -50%
        </span>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-[150%] text-surface-text">
              44,50 ₽
            </span>
            <span className="text-xs leading-[150%] text-grayscale-light">
              С картой
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-base leading-[150%] text-grayscale-hardest">
              50,50 ₽
            </span>
            <span className="text-xs leading-[150%] text-grayscale-light">
              Обычная
            </span>
          </div>
        </div>
        <div className="text-base leading-[150%] text-surface-text">
          Г/Ц Блинчики с мясом вес, Россия
        </div>
        <div className="flex gap-1">
          {...Array(5)
            .fill(0)
            .map((_, index) => <Star key={index} />)}
        </div>
        <Button className="bg-transparent border border-secondary rounded-sm text-secondary font-normal text-base leading-[150%] h-10 transition-colors duration-200 hover:border-none hover:bg-primary hover:text-onPrimary">
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default Card;

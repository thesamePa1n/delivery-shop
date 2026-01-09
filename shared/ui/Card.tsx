import Image from "next/image";
import Heart from "../icons/Heart";
import { Button } from "@/components/ui/button";
import Star from "../icons/Star";
import { IProductCard } from "../types/product";

const Card = ({
  basePrice,
  img,
  rating,
  title,
  discountPercent,
}: IProductCard) => {
  return (
    <div className="w-68 rounded-sm cursor-pointer shadow-default-s bg-onPrimary transition-shadow duration-200 hover:shadow-primary-m">
      <div className="relative w-68 h-40">
        <Image src={img} alt="карточка" fill className="object-contain" sizes="272px" />
        <button className="absolute right-2 top-2">
          <Heart />
        </button>
        {discountPercent ? (
          <span className="absolute rounded-sm left-2.5 bottom-2.5 text-onPrimary text-base leading-[150%] w-14 h-8 bg-primary flex items-center justify-center">
            -{discountPercent}%
          </span>
        ) : null}
      </div>
      <div className="p-2 flex flex-col gap-2">
        {discountPercent ? (
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-[150%] text-surface-text">
                {(basePrice * (1 - discountPercent / 100)).toFixed(2)} ₽
              </span>
              <span className="text-xs leading-[150%] text-grayscale-light">
                С картой
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base leading-[150%] text-grayscale-hardest">
                {(basePrice * (1 - discountPercent / 100) * (1 + 0.05)).toFixed(
                  2
                )}{" "}
                ₽
              </span>
              <span className="text-xs leading-[150%] text-grayscale-light">
                Обычная
              </span>
            </div>
          </div>
        ) : (
          <p className="font-bold text-lg leading-[150%] text-surface-text">
            {basePrice.toFixed(2)} ₽
          </p>
        )}

        <div className="text-base leading-[150%] text-surface-text line-clamp-1">
          {title}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, index) => {
            const starValue = rating - index;
            const fillPercent = Math.max(0, Math.min(1, starValue)) * 100;
            return <Star key={index} fillPercent={fillPercent} />;
          })}{" "}
        </div>
        <Button className="bg-transparent border border-secondary rounded-sm text-secondary font-normal text-base leading-[150%] h-10 transition-colors duration-200 hover:border-none hover:bg-primary hover:text-onPrimary">
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default Card;

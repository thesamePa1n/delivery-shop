import Image from "next/image";
import Link from "next/link";

const Specials = () => {
  return (
    <div className="mb-30">
      <h3 className="text-onSurface font-bold text-4xl leading-[150%] mb-10">
        Специальные предложения
      </h3>
      <div className="flex justify-between gap-10">
        <Link
          href="/"
          className="bg-[#FCD5BA] rounded-sm flex justify-center items-center pl-10 pr-7.75 py-8 transition-shadow duration-200 hover:shadow-[0px_8px_16px_rgba(202,147,96,0.5)]"
        >
          <div>
            <h6 className="text-onSurface font-bold text-2xl leading-[150%] mb-1.5">
              Оформите карту «Северяночка»
            </h6>
            <span className="text-onSurface text-base leading-[150%]">
              И получайте бонусы при покупке в магазинах и на сайте
            </span>
          </div>
          <Image
            src="/banner-1.png"
            alt="banner"
            width={230}
            height={180}
            className=""
          />
        </Link>
        <Link
          href="/"
          className="bg-[#E5FFDE] rounded-sm flex justify-center items-center pl-10 pr-11 pt-3.5 transition-shadow duration-200 hover:shadow-secondary-l"
        >
          <div>
            <h3 className="text-onSurface font-bold text-2xl leading-[150%] mb-1.5">
              Покупайте акционные товары
            </h3>
            <span className="text-onSurface text-base leading-[150%]">
              И получайте вдвое больше бонусов
            </span>
          </div>
          <Image
            src="/banner-2.png"
            alt="banner"
            width={193}
            height={186}
            className=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Specials;

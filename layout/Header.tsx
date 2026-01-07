import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cart from "@/shared/icons/Cart";
import ChevronDown from "@/shared/icons/ChevronDown";
import Favorite from "@/shared/icons/Favorite";
import Menu from "@/shared/icons/Menu";
import Order from "@/shared/icons/Order";
import Search from "@/shared/icons/Search";
import User from "@/shared/icons/User";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-onPrimary shadow-default-s">
      <div className="max-w-302 mx-auto px-4 py-2.75 flex gap-10 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={152} height={32} />
        </Link>
        <div className="flex items-center gap-4 flex-1">
          <Button className="bg-secondary hover:bg-secondary/90 cursor-pointer text-onPrimary w-35 h-10 rounded-sm font-normal gap-5 items-center text-base">
            <Menu /> Каталог
          </Button>
          <div className="relative flex-2">
            <Input
              type="text"
              placeholder="Найти товар"
              className="text-base
            placeholder:text-grayscale-hard text-onSurface leading-[150%] border-border-main-secondary h-10 pr-10 rounded-sm focus:shadow-secondary-m"
            />
            <button className="absolute transform -translate-y-1/2 top-1/2 right-2">
              <Search />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/favorites"
            className="flex flex-col items-center gap-2 group"
          >
            <Favorite />{" "}
            <span className="text-surface-text text-xs leading-[150%] transition-colors duration-200 group-hover:text-primary">
              Избранное
            </span>
          </Link>
          <Link
            href="/orders"
            className="flex flex-col items-center gap-2 group"
          >
            <Order />{" "}
            <span className="text-surface-text text-xs leading-[150%] transition-colors duration-200 group-hover:text-primary">
              Заказы
            </span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center gap-2 group">
            <Cart />{" "}
            <span className="text-surface-text text-xs leading-[150%] transition-colors duration-200 group-hover:text-primary">
              Корзина
            </span>
          </Link>
          <div className="flex items-center gap-2.5 cursor-pointer">
            <User />
            <span className="text-onSurface text-base leading-[150%]">
              Username
            </span>
            <ChevronDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
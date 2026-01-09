import Phone from "@/shared/icons/Phone";
import Facebook from "@/shared/icons/socials/Facebook";
import Instagram from "@/shared/icons/socials/Instagram";
import Ok from "@/shared/icons/socials/Ok";
import Vkontakte from "@/shared/icons/socials/Vkontakte";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 py-6 bg-[url(/footer-pattern.png)] bg-[#F9F4E2]">
      <div className="max-w-302 mx-auto px-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-10 items-center">
            <Link href="/">
              <Image
                src="/footer-logo.svg"
                alt="footer logo"
                width={64}
                height={44}
              />
            </Link>

            <ul className="flex gap-10">
              <li>
                <Link
                  href="/"
                  className="text-onSurface text-xs leading-[150%] transition-colors duration-200 hover:text-primary"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-onSurface text-xs leading-[150%] transition-colors duration-200 hover:text-primary"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-onSurface text-xs leading-[150%] transition-colors duration-200 hover:text-primary"
                >
                  Вакансии
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-onSurface text-xs leading-[150%] transition-colors duration-200 hover:text-primary"
                >
                  Статьи
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-onSurface text-xs leading-[150%] transition-colors duration-200 hover:text-primary"
                >
                  Политика обработки персональных данных
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex gap-4">
              <Link href="/">
                <Instagram />
              </Link>
              <Link href="/">
                <Vkontakte />
              </Link>
              <Link href="/">
                <Facebook />
              </Link>
              <Link href="/">
                <Ok />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              <a href="tel:88007773333" className="text-onSurface text-base leading-[150%] transition-colors duration-200 hover:text-primary">8 800 777 33 33</a>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <span className="text-onSurface text-xs leading-[150%]">Дизайн</span>
          <Image
            src="/design-logo.svg"
            alt="design logo"
            width={100}
            height={10}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

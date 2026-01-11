"use client";

import { cn } from "@/lib/utils";
import { ICatalog } from "@/shared/types/catalog";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "./loading";

const CatalogPage = () => {
  const [categories, setCategories] = useState<ICatalog[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/catalog");
      if (!response.ok) {
        throw new Error(`Ошибка ответа сервера: ${response.status}`);
      }
      const data: ICatalog[] = await response.json();
      setCategories(data.sort((a, b) => a.order - b.order));
    } catch (error) {
      console.log("Не удалось получить категории", error);
      setError("Не удалось получить категории");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="max-w-302 mx-auto px-4 text-center text-palette-error">
        Ошибка: {error}
      </div>
    );
  }

  return (
    <section className="max-w-302 mx-auto px-4">
      <Breadcrumbs
        links={[
          {
            title: "Главная",
            href: "/",
          },
        ]}
        pageTitle="Каталог"
      />
      <h2 className="font-bold text-[64px] leading-[150%] text-surface-text mb-15">
        Каталог
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {categories.map((category) => (
          <div
            key={category._id}
            className={cn(
              category.colSpan,
              "shadow-secondary-xs rounded-sm overflow-hidden min-h-50"
            )}
          >
            <div className="h-full w-full ">
              <Link
                href="/"
                className="block relative h-full overflow-hidden group min-w-68.5"
              >
                <Image
                  src={category.img}
                  alt="товар"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute transition-all duration-200 inset-0 bg-[linear-gradient(180deg,rgba(112,192,91,0)_0%,#70C05B_82.81%)] h-29.25 top-auto group-hover:bg-[linear-gradient(180deg,rgba(255,102,51,0)_0%,rgba(255,102,51,1)_100%)] group-hover:h-44.25" />
                <div className="absolute left-2.5 bottom-2.5">
                  <span className="text-secondary-text font-bold text-lg leading-[150%]">
                    {category.title}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatalogPage;

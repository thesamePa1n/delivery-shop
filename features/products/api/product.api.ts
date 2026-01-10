import { shuffleArray } from "@/lib/utils";
import { IProductCard } from "@/shared/types/product";

export const getProducts = async (category: string) => {
  let products: IProductCard[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=${category}`
    );
    products = await res.json();
    products = shuffleArray(products);
  } catch (err) {
    console.error("Ошибка в компоненте Products", err);
  }

  return products
};

import { IProductCard } from "@/shared/types/product";

export const getProducts = async (category: string) => {
  let products: IProductCard[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=${category}`
    );
    products = await res.json();
    const availableProducts: IProductCard[] = products.filter(
      (item) => item.quantity > 0
    );
    return availableProducts;
  } catch (err) {
    console.error("Ошибка в компоненте Products", err);
  }
};

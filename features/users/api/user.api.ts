import { IProductCard } from "@/shared/types/product";

export const getPurchases = async () => {
  let purchases:IProductCard[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL!}/api/users/purchases`
    );
    purchases = await res.json();
  } catch (err) {
    console.error("Ошибка в компоненте Purchases", err);
  }

  return purchases
};

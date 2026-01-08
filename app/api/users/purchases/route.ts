import { getDB } from "@/lib/utils";
import { IProductCard } from "@/shared/types/product";
import { IUser } from "@/shared/types/users";
import { NextResponse } from "next/server";
export const revalidate = 3600

export async function GET() {
  try {
    const db = await getDB();

    const user = await db.collection<IUser>("users").findOne({});

    if (!user?.purchases?.length) {
      return NextResponse.json([]);
    }

    const productIds = user.purchases.map((p) => p.id);

    const products = await db
      .collection<IProductCard>("products")
      .find({ id: { $in: productIds } })
      .toArray();

    return NextResponse.json(products.map(product => {
      const { discountPercent, ...rest } = product
      void discountPercent
      return rest
    }));
  } catch (error) {
    console.error("Ошибка сервера", error);
    return NextResponse.json(
      { message: "Ошибка при загрузке купленных продуктов" },
      { status: 500 }
    );
  }
}

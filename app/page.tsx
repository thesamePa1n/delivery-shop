import Specials from "@/components/main/Specials";
import Articles from "@/features/articles/ui/Articles";
import Products from "@/features/products/ui/Products";
import Purchases from "@/features/users/ui/Purchases";
import Banner from "@/layout/Banner";
import { Loader } from "@/shared/ui/Loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <main className="max-w-302 mx-auto px-4">
        {[
          {
            component: (
              <Products
                title="Акции"
                rightTitle="Все акции"
                category="actions"
                href="/actions"
              />
            ),
            text: "акций",
          },
          {
            component: (
              <Products
                title="Новинки"
                rightTitle="Все новинки"
                category="new"
                href="/news"
              />
            ),
            text: "новинок",
          },
          {
            component: <Purchases />,
            text: "ваших покупок",
          },
          {
            component: <Specials />,
            text: "специальных предложений",
          },
          {
            component: <Articles />,
            text: "статей",
          },
        ].map((item, index) => (
          <Suspense key={index} fallback={<Loader text={item.text} />}>
            {item.component}
          </Suspense>
        ))}
      </main>
    </div>
  );
}

//nirU9g86h3SjwxvV
//

import Specials from "@/components/main/Specials";
import Articles from "@/features/articles/ui/Articles";
import Products from "@/features/products/ui/Products";
import Purchases from "@/features/users/ui/Purchases";
import Banner from "@/layout/Banner";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <main className="max-w-302 mx-auto px-4">
        <Products
          title="Акции"
          rightTitle="Все акции"
          category="actions"
          href="/actions"
        />
        <Products
          title="Новинки"
          rightTitle="Все новинки"
          category="new"
          href="/news"
        />
        <Purchases />
        <Specials />
        <Articles />
      </main>
    </div>
  );
}

//nirU9g86h3SjwxvV
//

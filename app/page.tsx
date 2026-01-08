import Specials from "@/components/main/Specials";
import Banner from "@/layout/Banner";
import Header from "@/layout/Header";
import Products from "@/shared/ui/Products";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <main className="max-w-302 mx-auto px-4">
        {/* <Actions /> */}
        <Products title="Акции" rightTitle="Все акции" category="actions" />
        <Products title="Новинки" rightTitle="Все новинки" category="new" />
        <Products
          title="Покупали раньше"
          rightTitle="Все покупки"
          category="previously"
        />
        <Specials />
      </main>
    </div>
  );
}

//nirU9g86h3SjwxvV
//

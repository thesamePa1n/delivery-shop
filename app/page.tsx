import Articles from "@/components/main/Articles";
import Specials from "@/components/main/Specials";
import Banner from "@/layout/Banner";
import Footer from "@/layout/Footer";
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
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

//nirU9g86h3SjwxvV
//

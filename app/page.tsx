import Banner from "@/layout/Banner";
import Header from "@/layout/Header";
import Card from "@/shared/ui/Card";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <main className="max-w-302 mx-auto px-4">
        <Card />
      </main>
    </div>
  );
}

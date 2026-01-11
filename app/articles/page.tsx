import AllArticlesServer from "@/features/articles/ui/AllArticlesServer";
import Breadcrumbs from "@/shared/ui/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Статьи магазина Северяночка",
  description: "Статьие магазина",
};

const Page = () => {
  return (
    <div className="max-w-302 mx-auto px-4">
      <Breadcrumbs
        links={[
          {
            title: "Главная",
            href: "/",
          },
        ]}
        pageTitle="Все статьи"
      />
      <AllArticlesServer />
    </div>
  );
};

export default Page;

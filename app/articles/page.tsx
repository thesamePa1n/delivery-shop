import AllArticlesServer from "@/features/articles/ui/AllArticlesServer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Статьи магазина Северяночка",
  description: "Статьие магазина",
};

const Page = () => {
  return <AllArticlesServer />;
};

export default Page;

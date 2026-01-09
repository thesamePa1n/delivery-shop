import { getArticles } from "../api/articles.api"
import AllArticles from "./AllArticles"

const AllArticlesServer = async () => {
  const articles =  await getArticles()

  return (
    <AllArticles articles={articles} title="Все статьи"/>
  )
}

export default AllArticlesServer
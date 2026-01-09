import { IArticle } from "@/shared/types/articles"

export const getArticles = async () => {
  let articles: IArticle[] = []

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/articles`)
    articles = await res.json()
  } catch (err) {
    console.error('Ошибка в компоненте Article', err)
  }

  return articles
}
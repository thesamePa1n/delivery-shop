export interface IProductCard {
  id: number
  img: string
  title: string
  description: string
  basePrice: number
  discountPercent?: number
  rating: number
  categories: string[]
  weight?: string
}
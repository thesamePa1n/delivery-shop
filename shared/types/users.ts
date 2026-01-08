export interface IPurchase {
  id: number
  date: string
}

export interface IUser {
  _id: string
  name: string
  email: string
  purchases: IPurchase[]
}
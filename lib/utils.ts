import { clsx, type ClassValue } from "clsx"
import { MongoClient } from "mongodb"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const client = new MongoClient(process.env.DELIVERY_SHOP_DB_URL!)

const clientPromise = client.connect()

export const getDB = async () => {
  return (await clientPromise).db(process.env.DELIVERY_SHOP_DB_NAME!)
}

export const formatToRuDate = (date: string) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('ru-RU')
}

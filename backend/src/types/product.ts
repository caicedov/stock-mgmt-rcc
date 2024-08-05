import type { Status } from "../types"

interface Product {
  id: number
  name: string
  enabled: boolean
  categoryId: number
}

export interface NonSerializedProduct extends Product {
  quantity: number
  price: number
  criticalStock: number
  provider: string
}

export interface SerializedProduct extends Product {
  serial: string
  arrivalDate: string
  status: Status
}
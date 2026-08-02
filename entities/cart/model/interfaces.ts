import { CoffeeData } from '../../coffee/model/interfaces'

export type CoffeeSize = 'S' | 'M' | 'L'
export type CartState = Record<string, Partial<Record<CoffeeSize, number>>>
export type Cart = { id: number; size?: CoffeeSize; price?: number }

export type CartDetailedItem = {
    uniqueKey: string
    count: number
    info: CoffeeData & { size?: CoffeeSize }
}

export interface UpdatePayload {
    id: number
    size?: CoffeeSize
    action: 'increment' | 'decrement'
}

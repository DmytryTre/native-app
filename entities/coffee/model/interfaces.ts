import { CoffeeSize } from '../../cart/model/interfaces'

export type CoffeeRequest = {
    type?: string
    text?: string
}

export type CoffeeState = {
    isLoading: boolean
    error: string | null
    data: CoffeeData[] | null
    currentCoffee: CoffeeData | null
    filters: CoffeeRequest
}

export type CoffeeData = {
    id: number
    name: string
    subTitle: string
    type: string
    price: number
    image: string
    description: string
    rating: number
}

export type OrderItem = {
    id: CoffeeData['id']
    size?: CoffeeSize
    quantity: number
}

export type OrderPayload = {
    adress: string
    orderItems: OrderItem[]
}

export type CoffeeRequest = {
    type?: string
    text?: string
}

export type CoffeeState = {
    isLoading: boolean
    error: string | null
    data: CoffeeData[] | null
    filters: CoffeeRequest
}

export type CoffeeResponse = CoffeeData[]

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

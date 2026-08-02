import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetchCoffeeByIdApi, setCoffeeAtom } from '../../coffee/model/state'
import { CartState, Cart, CartDetailedItem, CoffeeSize, UpdatePayload } from './interfaces'
import { savedAddressAtom } from '../../location/model/state'

const storage = createJSONStorage<CartState>(() => AsyncStorage)

export const baseCartAtom = atomWithStorage<CartState>('coffee-cart-storage', {}, storage)
export const cartDetailedItemsAtom = atom<CartDetailedItem[]>([])
export const cartLoadingAtom = atom<boolean>(false)

export const addToCartAtom = atom(null, async (get, set, { id, size = 'M' }: Cart) => {
    const currentCart = await get(baseCartAtom)
    try {
        const currentCoffeeSizes = currentCart[id] || {}
        const currentCount = currentCoffeeSizes[size] || 0

        set(baseCartAtom, {
            ...currentCart,
            [id]: {
                ...currentCoffeeSizes,
                [size]: currentCount + 1,
            },
        })
    } catch (err) {
        console.error(err)
    }
})

export const removeFromCartAtom = atom(null, async (get, set, { id, size }: Cart) => {
    const currentCart = await get(baseCartAtom)
    const currentCoffeeSizes = currentCart[id]
    const updatedCoffeeSizes = { ...currentCoffeeSizes }
    if (size) {
        if (!currentCoffeeSizes || !currentCoffeeSizes[size]) return

        const currentCount = currentCoffeeSizes[size] || 0

        if (currentCount > 1) {
            updatedCoffeeSizes[size] = currentCount - 1
        } else {
            delete updatedCoffeeSizes[size]
        }
    }

    const updatedCart = { ...currentCart }

    if (Object.keys(updatedCoffeeSizes).length === 0) {
        delete updatedCart[id]
    } else {
        updatedCart[id] = updatedCoffeeSizes
    }

    set(baseCartAtom, updatedCart)
})

export const fetchCartDetailedItemsAtom = atom(null, async (_, set) => {
    const cart = await storage.getItem('coffee-cart-storage', {})
    set(baseCartAtom, cart)
    const coffeeIds = Object.keys(cart)
    const result: CartDetailedItem[] = []

    if (coffeeIds.length === 0) {
        set(cartDetailedItemsAtom, [])
        return
    }

    set(cartLoadingAtom, true)

    for (const idStr of coffeeIds) {
        const numericId = Number(idStr)
        const sizesObj = cart[idStr] || {}
        try {
            const info = await fetchCoffeeByIdApi(numericId)

            Object.entries(sizesObj).forEach(([size, count]) => {
                if (count) {
                    const coffeeSize = size as CoffeeSize
                    result.push({
                        uniqueKey: `${numericId}-${size}`,
                        count,
                        info: { size: coffeeSize, ...info },
                    })
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    set(cartDetailedItemsAtom, result)
    set(cartLoadingAtom, false)
})

export const cartTotalPriceAtom = atom((get) => {
    const detailedItems = get(cartDetailedItemsAtom)

    return detailedItems.reduce((sum, item) => {
        const itemPrice = item.info?.price || 0
        return sum + itemPrice * item.count
    }, 0)
})

export const cartDeliveryPriceAtom = atom((get) => {
    const detailedItems = get(cartDetailedItemsAtom)
    return detailedItems.length > 0 ? 100 : 0
})

export const cartGrandTotalAtom = atom((get) => {
    const totalPrice = get(cartTotalPriceAtom)
    const deliveryPrice = get(cartDeliveryPriceAtom)
    return totalPrice + deliveryPrice
})

export const updateDetailedItemAtom = atom(
    null,
    (get, set, { id, size, action }: UpdatePayload) => {
        const items = get(cartDetailedItemsAtom)

        const updatedItems = items
            .map((item) => {
                if (item.info.id === id && item.info.size === size) {
                    const newCount = action === 'increment' ? item.count + 1 : item.count - 1
                    return { ...item, count: newCount }
                }
                return item
            })
            .filter((item) => item.count > 0)

        set(cartDetailedItemsAtom, updatedItems)
    },
)

export const sendOrderAtom = atom(null, async (get, set) => {
    const items = get(cartDetailedItemsAtom)
    const savedAddress = await get(savedAddressAtom)

    // Проверяем, что корзина не пуста и адрес действительно введен
    if (items.length === 0 || !savedAddress?.addressText) return

    const orderPayload = {
        adress: savedAddress.addressText,
        orderItems: items.map((item) => ({
            id: item.info.id,
            size: item.info.size,
            quantity: item.count,
        })),
    }

    const isSuccess = await set(setCoffeeAtom, orderPayload)

    if (isSuccess) {
        set(baseCartAtom, {}) // Очищаем AsyncStorage
        set(cartDetailedItemsAtom, []) // Очищаем список в UI
    }
})

import { atom } from 'jotai'
import axios, { AxiosError } from 'axios'

import { API } from '../api/api'

import { CoffeeData, CoffeeState } from './interfaces'

const INITIAL_STATE: CoffeeState = {
    isLoading: false,
    error: null,
    data: null,
    currentCoffee: null,
    filters: {
        type: '',
        text: '',
    },
}

export const coffeeAtom = atom<CoffeeState>(INITIAL_STATE)

export const getCoffeeAtom = atom(
    (get) => get(coffeeAtom),
    async (get, set) => {
        const { filters } = get(coffeeAtom)

        const apiParams = {
            ...filters,
            type: filters.type === 'all' ? '' : filters.type,
        }

        set(coffeeAtom, (prev) => ({
            ...prev,
            isLoading: true,
            error: null,
            filters: apiParams,
        }))

        try {
            const { data } = await axios.get<CoffeeData[]>(API, {
                params: apiParams,
            })
            set(coffeeAtom, (prev) => ({
                ...prev,
                isLoading: false,
                error: null,
                data: data,
                filters: apiParams,
            }))
        } catch (error) {
            if (error instanceof AxiosError) {
                set(coffeeAtom, (prev) => ({
                    ...prev,
                    isLoading: false,
                    error: error.response?.data.message,
                    data: null,
                    filters: apiParams,
                }))
            }
        }
    },
)

export const getCoffeeAtomById = atom(null, async (get, set, id: number) => {
    set(coffeeAtom, (prev) => ({
        ...prev,
        isLoading: true,
        error: null,
    }))

    try {
        const { data } = await axios.get<CoffeeData>(`${API}id/${id}`)
        set(coffeeAtom, (prev) => ({
            ...prev,
            currentCoffee: { ...data, size: 'M' },
            isLoading: false,
            error: null,
        }))
    } catch (error) {
        if (error instanceof AxiosError) {
            set(coffeeAtom, (prev) => ({
                ...prev,
                isLoading: false,
                error: error.response?.data.message,
                currentCoffee: null,
            }))
        }
    }
})

import { atom } from 'jotai'
import axios, { AxiosError } from 'axios'

import { API } from '../api/api'

import { CoffeeRequest, CoffeeResponse, CoffeeState } from './interfaces'

const INITIAL_STATE: CoffeeState = {
    isLoading: false,
    error: null,
    data: null,
    filters: {
        type: '',
        text: '',
    },
}

export const coffeeTypesAtom = atom([
    { name: 'Все', type: 'all', isSelect: true },
    { name: 'Капучино', type: 'cappuccino', isSelect: false },
    { name: 'Латте', type: 'latte', isSelect: false },
    { name: 'Макиатто', type: 'macchiato', isSelect: false },
    { name: 'Американо', type: 'americano', isSelect: false },
])

export const setFiltersCoffeeAtom = atom(null, (get, set, { type, text }: CoffeeRequest) => {
    const currentState = get(coffeeAtom)
    const coffeeTypes = get(coffeeTypesAtom)

    const updatedFilters = {
        type: type !== undefined ? type : currentState.filters?.type,
        text: text !== undefined ? text : currentState.filters?.text,
    }

    if (type) {
        const updatedTypes = coffeeTypes.map((item) => ({
            ...item,
            isSelect: item.type === type,
        }))
        set(coffeeTypesAtom, updatedTypes)
    }

    set(coffeeAtom, {
        ...currentState,
        filters: updatedFilters,
    })

    set(getCoffeeAtom)
})

export const coffeeAtom = atom<CoffeeState>(INITIAL_STATE)

export const getCoffeeAtom = atom(
    (get) => get(coffeeAtom),
    async (get, set) => {
        const { filters } = get(coffeeAtom)

        const apiParams = {
            ...filters,
            type: filters.type === 'all' ? '' : filters.type,
        }

        set(coffeeAtom, {
            isLoading: true,
            error: null,
            data: null,
            filters: apiParams,
        })

        try {
            const { data } = await axios.get<CoffeeResponse>(API, {
                params: apiParams,
            })
            set(coffeeAtom, {
                isLoading: false,
                error: null,
                data: data,
                filters: apiParams,
            })
        } catch (error) {
            if (error instanceof AxiosError) {
                set(coffeeAtom, {
                    isLoading: false,
                    error: error.response?.data.message,
                    data: null,
                    filters: apiParams,
                })
            }
        }
    },
)

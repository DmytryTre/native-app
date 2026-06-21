import { atom } from 'jotai'
import axios, { AxiosError } from 'axios'

import { API } from '../api/api'

import { CoffeeResponse, CoffeeState } from './interfaces'

const INITIAL_STATE: CoffeeState = {
    isLoading: false,
    error: null,
    data: null,
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

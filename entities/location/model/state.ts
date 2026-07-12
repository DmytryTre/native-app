import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Location from 'expo-location'
import { fetchDeviceLocation } from '../../../shared/lib/deviceLocation/fetchDeviceLocation'

export const locationAtom = atom<Location.LocationObject | null>(null)
export const locationErrorAtom = atom<string | null>(null)
export const isLocationLoadingAtom = atom<boolean>(false)

export interface AddressState {
    addressText: string
    description: string
}

const initialValue: AddressState = {
    addressText: '',
    description: '',
}

const storage = createJSONStorage<AddressState>(() => AsyncStorage)

export const savedAddressAtom = atomWithStorage<AddressState>(
    'user-saved-address',
    initialValue,
    storage,
)

export const requestLocationAtom = atom(null, async (_, set) => {
    set(isLocationLoadingAtom, true)
    set(locationErrorAtom, null)

    try {
        const location = await fetchDeviceLocation()
        set(locationAtom, location)
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message === 'NOT_GRANTED') {
                set(locationErrorAtom, 'Нет доступа к локации')
            } else {
                set(locationErrorAtom, 'Не удалось получить координаты')
            }
        } else {
            set(locationErrorAtom, 'Произошла неизвестная ошибка')
        }
    } finally {
        set(isLocationLoadingAtom, false)
    }
})

import { atom } from 'jotai'
import { AddressState, savedAddressAtom } from '../../../entities/location/model/state'
export const saveAddressAtom = atom(null, (_get, set, newFields: AddressState) => {
    if (!newFields.addressText.trim()) return

    set(savedAddressAtom, newFields)
})

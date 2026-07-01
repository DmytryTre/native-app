import { useState, useEffect } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'
import { saveAddressAtom } from '../model/state'
import { savedAddressAtom } from '../../../entities/location/model/state'

export function useLocationForm() {
    const savedAddress = useAtomValue(savedAddressAtom)
    const saveAddress = useSetAtom(saveAddressAtom)

    const [addressText, setAddressText] = useState('')
    const [description, setDescription] = useState('')

    const isNotEmpty = addressText.trim().length > 0
    const isChanged =
        addressText.trim() !== (savedAddress?.addressText || '').trim() ||
        description.trim() !== (savedAddress?.description || '').trim()
    const isValid = isNotEmpty && isChanged

    useEffect(() => {
        if (savedAddress) {
            setAddressText(savedAddress.addressText || '')
            setDescription(savedAddress.description || '')
        }
    }, [savedAddress])

    const handleSave = () => {
        saveAddress({ addressText, description })
    }

    return {
        addressText,
        setAddressText,
        description,
        setDescription,
        handleSave,
        isValid,
    }
}

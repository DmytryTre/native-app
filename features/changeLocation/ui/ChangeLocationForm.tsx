import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { reverseGeocodeAsync } from 'expo-location'
import { useLocationForm } from '../model/useLocationForm'
import { fetchDeviceLocation } from '../../../shared/lib/deviceLocation/fetchDeviceLocation'
import Button from '../../../shared/ui/button/Button'
import LocationInput from './LocationInput'
import CompassIcon from '@/assets/images/icons/compass'
import LocationPointIcon from '@/assets/images/icons/locationPoint'
import { Spacing } from '../../../shared/tokens'
import DescriptionIcon from '@/assets/images/icons/description'

export function ChangeLocationForm() {
    const { description, setDescription, handleSave, isValid, addressText, setAddressText } =
        useLocationForm()

    const handleFetchDeviceLocation = async () => {
        try {
            const locationData = await fetchDeviceLocation()
            const { latitude, longitude } = locationData.coords

            const response = await reverseGeocodeAsync({ latitude, longitude })

            if (response && response.length > 0) {
                const address = response[0]

                const city = address.city || address.subregion || ''
                const street = address.street || ''
                const name = address.name || ''

                const formattedAddress = [city, street, name].filter(Boolean).join(', ')

                setAddressText(formattedAddress || `${latitude}, ${longitude}`)
            }
        } catch (error) {
            console.error('Ошибка получения локации:', error)
        }
    }

    const renderIconsLocation = (handleFetchDeviceLocation: () => void) => (
        <>
            <Pressable style={styles.firstIcon} onPress={handleFetchDeviceLocation}>
                <LocationPointIcon />
            </Pressable>
            <Pressable style={styles.secondIcon} onPress={handleFetchDeviceLocation}>
                <CompassIcon />
            </Pressable>
        </>
    )

    const renderIconsDescription = () => (
        <View style={{ ...styles.firstIcon, ...styles.iconMultiline }}>
            <DescriptionIcon />
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <LocationInput
                    value={addressText}
                    icons={renderIconsLocation(handleFetchDeviceLocation)}
                />
                <LocationInput
                    numberOfLines={5}
                    multiline={true}
                    value={description}
                    onChangeText={setDescription}
                    icons={renderIconsDescription()}
                />
            </View>
            <Button text="Сохранить" onPress={handleSave} disabled={!isValid} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { height: '100%', justifyContent: 'space-between' },
    inputContainer: { gap: 12 },
    firstIcon: {
        position: 'absolute',
        left: Spacing.s16,
        width: Spacing.s20,
        height: Spacing.s20,
    },
    secondIcon: {
        position: 'absolute',
        right: Spacing.s10,
        width: Spacing.s34,
        height: Spacing.s34,
    },
    iconMultiline: {
        top: 15,
    },
})

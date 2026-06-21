import * as Location from 'expo-location'

export const fetchDeviceLocation = async (): Promise<Location.LocationObject> => {
    const currentPermission = await Location.getForegroundPermissionsAsync()
    let status = currentPermission.status

    if (status !== 'granted') {
        const requestResult = await Location.requestForegroundPermissionsAsync()
        status = requestResult.status
    }

    if (status !== 'granted') {
        throw new Error('Нет доступа к локации')
    }

    const lastKnown = await Location.getLastKnownPositionAsync()
    if (lastKnown) {
        return lastKnown
    }

    return await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
    })
}

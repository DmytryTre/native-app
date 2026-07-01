import * as Location from 'expo-location'

export const fetchDeviceLocation = async (): Promise<Location.LocationObject> => {
    const isProviderEnabled = await Location.hasServicesEnabledAsync()
    if (!isProviderEnabled) {
        throw new Error('Геолокация отключена на устройстве. Включите GPS в настройках.')
    }

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

    const controller = new AbortController()

    const timeoutId = setTimeout(() => {
        controller.abort()
    }, 15000)

    try {
        const position = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
        })
        return position
    } catch (error) {
        if (controller.signal.aborted) {
            throw new Error('Превышено время ожидания геолокации. Попробуйте снова.')
        }
        throw error
    } finally {
        clearTimeout(timeoutId)
    }
}

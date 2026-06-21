import { Text } from 'react-native'
import Button from '../../../shared/ui/button/Button'
import { fetchDeviceLocation } from '../../../shared/lib/deviceLocation/fetchDeviceLocation'

export default function Address() {
    const handlePress = async () => {
        try {
            const locationData = await fetchDeviceLocation()

            console.log('Реальные координаты:', locationData)
        } catch (error) {
            console.error('Ошибка получения локации:', error)
        }
    }
    return <Button onPress={() => handlePress()} text="локация" />
}

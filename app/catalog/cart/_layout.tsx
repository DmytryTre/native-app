import { Stack } from 'expo-router'
import HeaderWithBackButton from '../../../shared/ui/headerWithBackButton/HeaderWithBackButton'

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="address"
                options={{
                    header: () => <HeaderWithBackButton title="Изменить адрес" />,
                }}
            />
            <Stack.Screen name="success" options={{ headerShown: false }} />
        </Stack>
    )
}

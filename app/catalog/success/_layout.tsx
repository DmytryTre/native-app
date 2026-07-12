import { Stack } from 'expo-router'
import HeaderWithBackButton from '../../../shared/ui/headerWithBackButton/HeaderWithBackButton'
import { StatusBar } from 'expo-status-bar'

export default function SuccessLayout() {
    return (
        <>
            <StatusBar style="dark" />
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                    name="address"
                    options={{
                        header: () => <HeaderWithBackButton title="Изменить адрес" />,
                    }}
                />
            </Stack>
        </>
    )
}

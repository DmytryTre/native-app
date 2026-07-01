import { Stack } from 'expo-router'
import HeaderWithBackButton from '../../../shared/ui/headerWithBackButton/HeaderWithBackButton'
import { StatusBar } from 'react-native'

export default function SuccessLayout() {
    return (
        <>
            <StatusBar barStyle="dark-content" />

            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                    name="address"
                    options={{
                        headerLeft: () => <HeaderWithBackButton title="Изменить адрес" />,
                    }}
                />
            </Stack>
        </>
    )
}

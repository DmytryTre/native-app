import { Tabs, useSegments } from 'expo-router'
import { useFonts } from 'expo-font'
import React from 'react'
import TabBar from '../../widget/layout/ui/TabBar/TabBar'
import HeaderWithBackButton from '../../shared/ui/headerWithBackButton/HeaderWithBackButton'

export default function RootLayout() {
    const segments = useSegments() as string[]
    const [loaded] = useFonts({
        'Sora-Regular': require('@/assets/fonts/Sora-Regular.ttf'),
        'Sora-SemiBold': require('@/assets/fonts/Sora-SemiBold.ttf'),
    })

    if (!loaded) {
        return null
    }

    const isDetailPage = segments.includes('[id]')

    return (
        <Tabs tabBar={(props) => (!isDetailPage ? <TabBar {...props} /> : null)}>
            <Tabs.Screen options={{ headerShown: false }} name="index" />
            <Tabs.Screen
                name="cart"
                options={{
                    header: () => <HeaderWithBackButton title="Изменить адрес" />,
                    headerShown: false,
                    href: '/catalog/cart',
                }}
            />
            <Tabs.Screen
                name="[id]"
                options={{
                    header: () => <HeaderWithBackButton title="Описание" />,
                    href: null,
                }}
            />
        </Tabs>
    )
}

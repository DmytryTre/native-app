import { Tabs } from 'expo-router'
import { useFonts } from 'expo-font'
import React from 'react'

import TabBar from '../../../entities/layout/ui/TabBar/TabBar'

export default function RootLayout() {
    const [loaded] = useFonts({
        SoraSans: require('@/assets/fonts/Sora-Regular.ttf'),
        SoraSansBold: require('@/assets/fonts/Sora-SemiBold.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="success" />
        </Tabs>
    )
}

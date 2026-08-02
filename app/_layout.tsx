import { useEffect } from 'react'
import { Slot, useSegments } from 'expo-router'
import { useFonts } from 'expo-font'
import { StatusBar, setStatusBarStyle } from 'expo-status-bar'
import Notification from '../shared/Notifications/Notification'

export default function RootLayout() {
    const [loaded] = useFonts({
        SoraSans: require('@/assets/fonts/Sora-Regular.ttf'),
        SoraSansBold: require('@/assets/fonts/Sora-SemiBold.ttf'),
    })

    const segments = useSegments()

    useEffect(() => {
        const pathSegments = segments as string[]
        const currentScreen = pathSegments[pathSegments.length - 1]

        const lightStatusBarScreens = ['index', '(app)', 'catalog']

        if (lightStatusBarScreens.includes(currentScreen)) {
            setStatusBarStyle('light')
        } else {
            setStatusBarStyle('dark')
        }
    }, [segments])

    if (!loaded) {
        return null
    }

    return (
        <>
            <Notification />
            <StatusBar />
            <Slot />
        </>
    )
}

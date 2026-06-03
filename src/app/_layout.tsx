import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'

export default function RootLayout() {
    const [loaded] = useFonts({
        SoraSans: require('@/assets/fonts/Sora-Regular.ttf'),
        SoraSansBold: require('@/assets/fonts/Sora-SemiBold.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <>
            <Slot />
        </>
    )
}

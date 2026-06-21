import { Pressable, StyleSheet } from 'react-native'
import EditIcone from '@/assets/images/icons/edit'
import { router } from 'expo-router'

export default function ChangeLocationButton({ color }: { color?: string }) {
    return (
        <Pressable onPress={() => router.push('/catalog/success/address')} style={styles.icon}>
            <EditIcone color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 14,
    },
})

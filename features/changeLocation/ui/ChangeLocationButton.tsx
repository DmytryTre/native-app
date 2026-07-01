import { Text, View, Pressable, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import EditIcon from '@/assets/images/icons/edit'
import { router } from 'expo-router'

interface ChangeLocationButtonProps {
    style: StyleProp<ViewStyle>
    color?: string
    text: React.ReactNode | string
    fromCatalog?: boolean
}

export default function ChangeLocationButton({
    style,
    color,
    text,
    fromCatalog = false,
}: ChangeLocationButtonProps) {
    const handlePress = () => {
        const targetPath = '/catalog/success/address'

        if (fromCatalog) {
            router.push(`${targetPath}?from=catalog`)
        } else {
            router.push(targetPath)
        }
    }

    return (
        <Pressable style={style} onPress={handlePress}>
            {typeof text === 'string' ? <Text>{text}</Text> : text}
            <View style={styles.icon}>
                <EditIcon color={color} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 14,
    },
})

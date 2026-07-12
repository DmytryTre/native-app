import { Text, StyleSheet, StyleProp, ViewStyle, View } from 'react-native'
import { Colors, Fonts } from '../../tokens'

interface CartTitleProps {
    text: string
    style?: StyleProp<ViewStyle>
}

export function CartTitle({ text, style }: CartTitleProps) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 10,
    },
    text: {
        color: Colors.charcoal,
        fontFamily: Fonts.semibold,
        fontSize: Fonts.fs16,
    },
})

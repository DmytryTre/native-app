import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import { Colors, Fonts } from '../../tokens'

interface CartTitleProps {
    text: string
    style?: StyleProp<TextStyle>
}

export function CartTitle({ text, style }: CartTitleProps) {
    return <Text style={[styles.text, style]}>{text}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: Colors.charcoal,
        fontFamily: Fonts.semibold,
        fontSize: Fonts.fs16,
    },
})

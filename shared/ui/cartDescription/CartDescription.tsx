import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import { Colors, Fonts } from '../../tokens'

interface CartDescription {
    text: string
    style?: StyleProp<TextStyle>
}

export function CartDescription({ text, style }: CartDescription) {
    return <Text style={[styles.text, style]}>{text}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: Colors.mediumGray,
        fontFamily: Fonts.regular,
        fontSize: Fonts.fs14,
    },
})

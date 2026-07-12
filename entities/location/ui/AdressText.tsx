import { Text, StyleSheet } from 'react-native'
import { Fonts } from '../../../shared/tokens'
import { useAtomValue } from 'jotai'
import { savedAddressAtom } from '../model/state'

export default function AdressText({ color }: { color: string }) {
    const { addressText } = useAtomValue(savedAddressAtom)

    return (
        <Text style={{ ...styles.text, color: color }}>
            {addressText ? addressText : 'Адрес не установлен'}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.semibold,
        fontSize: Fonts.fs14,
    },
})

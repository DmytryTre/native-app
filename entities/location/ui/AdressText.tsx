import { Text, StyleSheet } from 'react-native'
import { useAtomValue } from 'jotai'
import { locationAtom } from '../model/state'
import { Fonts } from '../../../shared/tokens'

export default function AdressText({ color }: { color: string }) {
    const location = useAtomValue(locationAtom)
    return (
        <Text style={{ ...styles.text, color: color }}>
            {location ? JSON.stringify(location) : 'Адрес не установлен'}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.semibold,
        fontSize: Fonts.fs14,
    },
})

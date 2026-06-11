import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useSetAtom } from 'jotai'

import Input from '@/app/input'
import { Spacing, Colors } from '@/tokens'
import { useState } from 'react'
import { setFiltersCoffeeAtom } from '../../../../entities/coffee/model/state'

export default function Search() {
    const [text, setText] = useState<string>('')
    const { top } = useSafeAreaInsets()
    const setFilters = useSetAtom(setFiltersCoffeeAtom)

    const handleSend = (text: string) => {
        setFilters({ text: text })
    }

    return (
        <View style={{ ...styles.container, paddingTop: top }}>
            <Input
                value={text}
                onChangeText={setText}
                onSubmitEditing={() => handleSend(text)}
                onBlur={() => handleSend(text)}
                placeholder="Найти кофе"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Spacing.s30,
        backgroundColor: Colors.black,
        color: Colors.lightGray,
    },
})

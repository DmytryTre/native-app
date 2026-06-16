import { StyleSheet, FlatList } from 'react-native'
import Button from './button'
import { useAtomValue, useSetAtom } from 'jotai'
import { coffeeTypesAtom, setFiltersCoffeeAtom } from '../../../entities/coffee/model/state'
import { Gaps, Spacing } from '../../../shared/tokens'

export default function FilterTabs() {
    const setFilters = useSetAtom(setFiltersCoffeeAtom)
    const coffeeTypes = useAtomValue(coffeeTypesAtom)

    const handlePress = (type: string) => {
        setFilters({ type: type })
    }

    return (
        <FlatList
            data={coffeeTypes}
            style={styles.flatList}
            contentContainerStyle={styles.content}
            horizontal
            renderItem={({ item }) => (
                <Button
                    text={item.name}
                    isSelect={item.isSelect}
                    onPress={() => handlePress(item.type)}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        marginLeft: Spacing.s30,
        overflowX: 'hidden',
    },
    content: {
        gap: Gaps.g10,
        paddingVertical: Spacing.s30,
    },
})

import { Spacing } from '@/tokens'
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native'
import { getCoffeeAtom } from '../../../../entities/coffee/model/state'
import { useAtom } from 'jotai'
import Cart from '@/app/cart'
import FilterTabs from '../filterTabs'

export default function CoffeeCatalog() {
    const [coffee] = useAtom(getCoffeeAtom)

    return (
        <View>
            <FilterTabs />
            {coffee.isLoading && <ActivityIndicator size="large" color="#000" />}
            {coffee.data && (
                <FlatList
                    data={coffee.data}
                    numColumns={2}
                    contentContainerStyle={styles.content}
                    columnWrapperStyle={styles.columnWrapper}
                    renderItem={({ item }) => <Cart {...item} />}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: Spacing.s30,
        paddingBottom: Spacing.s30,
        rowGap: 20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
})

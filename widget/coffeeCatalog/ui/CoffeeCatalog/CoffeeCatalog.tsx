import { StyleSheet, FlatList, View, RefreshControl } from 'react-native'
import { useAtom, useSetAtom } from 'jotai'
import { useRouter } from 'expo-router'

import FilterTabs from '@/../features/filterTabs/ui/FilterTabs'
import { getCoffeeAtom } from '@/../entities/coffee/model/state'

import { Gaps, Spacing } from '@/../shared/tokens'
import CoffeeCart from '../../../../entities/coffee/ui/CoffeeCard'
import { useEffect } from 'react'
import Loader from '../../../../shared/ui/loader/Loader'

export default function CoffeeCatalog() {
    const router = useRouter()
    const getCoffee = useSetAtom(getCoffeeAtom)

    useEffect(() => {
        getCoffee()
    }, [])

    const [coffee] = useAtom(getCoffeeAtom)

    return (
        <View style={styles.container}>
            <FilterTabs />
            {coffee.isLoading && <Loader />}
            {coffee.data && (
                <FlatList
                    data={coffee.data}
                    refreshControl={
                        <RefreshControl refreshing={coffee.isLoading} onRefresh={getCoffee} />
                    }
                    numColumns={2}
                    contentContainerStyle={styles.content}
                    columnWrapperStyle={styles.columnWrapper}
                    renderItem={({ item }) => (
                        <CoffeeCart {...item} onPress={() => router.push(`/catalog/${item.id}`)} />
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: Spacing.s30,
        paddingBottom: Spacing.s30,
        rowGap: Gaps.g20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
})

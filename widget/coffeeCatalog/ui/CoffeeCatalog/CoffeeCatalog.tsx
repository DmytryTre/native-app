import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native'
import { useAtom, useSetAtom } from 'jotai'
import { useRouter } from 'expo-router' // 1. Импортируем useRouter

import FilterTabs from '@/../features/filterTabs/ui/FilterTabs'
import { getCoffeeAtom } from '@/../entities/coffee/model/state'

import { Gaps, Spacing } from '@/../shared/tokens'
import CoffeeCart from '../../../../entities/coffee/ui/CoffeeCard'
import { useEffect } from 'react'

export default function CoffeeCatalog() {
    const router = useRouter()
    const getCoffee = useSetAtom(getCoffeeAtom)

    useEffect(() => {
        getCoffee()
    }, [])

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
                    renderItem={({ item }) => (
                        <CoffeeCart {...item} onPress={() => router.push(`/catalog/${item.id}`)} />
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: Spacing.s30,
        paddingBottom: Spacing.s20,
        rowGap: Gaps.g20,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
})

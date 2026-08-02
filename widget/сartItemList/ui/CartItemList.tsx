import { useFocusEffect } from 'expo-router'
import { useAtomValue, useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { FlatList, RefreshControl, StyleSheet } from 'react-native'
import {
    cartDetailedItemsAtom,
    cartLoadingAtom,
    fetchCartDetailedItemsAtom,
} from '../../../entities/cart/model/state'
import Loader from '../../../shared/ui/loader/Loader'
import CartItem from './CartItem'

export default function CartItemList() {
    const flatCartItems = useAtomValue(cartDetailedItemsAtom)
    const fetchCartDetails = useSetAtom(fetchCartDetailedItemsAtom)
    const isLoading = useAtomValue(cartLoadingAtom)

    useFocusEffect(
        useCallback(() => {
            fetchCartDetails()
        }, [fetchCartDetails]),
    )

    if (isLoading) {
        return <Loader />
    }

    if (!flatCartItems.length) {
        return null // Пустое состояние теперь красиво обработаем на самом экране Cart
    }

    return (
        <FlatList
            data={flatCartItems}
            keyExtractor={(item) => item.uniqueKey} // Добавили ключ для оптимизации FlatList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchCartDetails} />}
            renderItem={({ item }) => <CartItem {...item} />}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    listContent: {
        gap: 10,
        paddingBottom: 20,
    },
})

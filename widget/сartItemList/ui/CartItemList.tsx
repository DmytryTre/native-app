import { useFocusEffect } from 'expo-router'
import { useAtomValue, useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { FlatList, RefreshControl } from 'react-native'
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

    return (
        <FlatList
            data={flatCartItems}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchCartDetails} />}
            renderItem={({ item }) => <CartItem {...item} />}
        />
    )
}

import { View, Text, StyleSheet } from 'react-native'
import AddButton from '../../../features/addToCart/ui/AddButton'
import DecrementButton from '../../../features/decrementButton/ui/decrementButton'
import { useSetAtom } from 'jotai'

import { updateDetailedItemAtom } from '../../../entities/cart/model/state'
import { CartDetailedItem } from '../../../entities/cart/model/interfaces'
import { Spacing } from '../../../shared/tokens'

interface CoffeeCounterProps {
    count: CartDetailedItem['count']
    id: CartDetailedItem['info']['id']
    size?: CartDetailedItem['info']['size']
}

export default function CoffeeCounter({ count, id, size }: CoffeeCounterProps) {
    const updateDetailedItem = useSetAtom(updateDetailedItemAtom)

    return (
        <View style={styles.container}>
            <AddButton
                id={id}
                size={size}
                text="+"
                isCounter={true}
                onSuccess={() => {
                    updateDetailedItem({ id, size, action: 'increment' })
                }}
            />
            <View style={styles.counter}>
                <Text>{count}</Text>
            </View>
            <DecrementButton
                id={id}
                size={size}
                onSuccess={() => {
                    updateDetailedItem({ id, size, action: 'decrement' })
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    counter: {
        alignItems: 'center',
        width: Spacing.s20,
    },
})

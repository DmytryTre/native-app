import { View, StyleSheet } from 'react-native'
import { CartDetailedItem } from '../../../entities/cart/model/interfaces'
import CartItemInfo from '../../../entities/cart/ui/CartItemInfo'
import CoffeeCounter from '../../changeCoffeeCount/ui/CoffeeCounter'
export default function CartItem({ info, count }: CartDetailedItem) {
    return (
        <View style={styles.container}>
            <CartItemInfo {...info} />
            <CoffeeCounter count={count} id={info.id} size={info.size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
})

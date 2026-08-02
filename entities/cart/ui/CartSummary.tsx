import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useAtomValue } from 'jotai'
import { cartDeliveryPriceAtom, cartGrandTotalAtom, cartTotalPriceAtom } from '../model/state'
import { Colors, Spacing, Fonts } from '../../../shared/tokens'
import { CartTitle } from '../../../shared/ui/cartTitle/CartTitle'
import { CartDescription } from '../../../shared/ui/cartDescription/CartDescription'

export default function OrderSummary() {
    const price = useAtomValue(cartTotalPriceAtom)
    const delivery = useAtomValue(cartDeliveryPriceAtom)
    const total = useAtomValue(cartGrandTotalAtom)
    if (price === 0) return null

    return (
        <View style={styles.container}>
            <CartTitle style={styles.title} text="Итог" />

            <View style={styles.row}>
                <CartDescription text="Цена" />
                <CartTitle style={styles.title} text={`${price} ₽`} />
            </View>

            <View style={styles.row}>
                <CartDescription text="Доставка" />
                <CartTitle style={styles.title} text={`${delivery} ₽`} />
            </View>

            <View style={styles.separator} />

            <View style={styles.row}>
                <Text style={styles.totalLabel}>Итого к оплате</Text>
                <CartTitle style={styles.title} text={`${total} ₽`} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: Spacing.s16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Spacing.s10,
    },
    separator: {
        height: 2,
        backgroundColor: Colors.paleGray,
    },
    totalLabel: {
        fontFamily: Fonts.regular,
        fontSize: Fonts.fs14,
        color: Colors.charcoal,
    },
    title: {
        paddingTop: 0,
        paddingBottom: 0,
    },
})

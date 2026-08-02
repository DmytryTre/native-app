import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors, Fonts, Spacing } from '../../../shared/tokens'
import AddButton from '../../../features/addToCart/ui/AddButton'
import { router } from 'expo-router'
import { Cart } from '../../../entities/cart/model/interfaces'

export default function DetailFooter({ id, price, size }: Cart) {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.priceBlock}>
                <Text style={styles.priceLabel}>Цена</Text>
                <Text style={styles.priceValue}>{price} ₽</Text>
            </View>

            <View style={styles.buttonWrapper}>
                <AddButton
                    id={id}
                    size={size}
                    text="В корзину"
                    onSuccess={() => router.push('/catalog/cart')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        gap: Spacing.s25,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 0,
        paddingHorizontal: Spacing.s25,
        paddingTop: Spacing.s32,
        paddingBottom: Spacing.s50,
        backgroundColor: Colors.white,
    },
    priceBlock: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: Spacing.s4,
    },
    priceLabel: {
        fontSize: Fonts.fs14,
        color: Colors.silver,
        fontFamily: Fonts.regular,
    },
    priceValue: {
        fontSize: Fonts.fs18,
        color: Colors.warmBrown,
        fontFamily: Fonts.semibold,
    },
    buttonWrapper: {
        flex: 1,
    },
})

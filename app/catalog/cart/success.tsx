import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CartTitle } from '../../../shared/ui/cartTitle/CartTitle'
import SafeScreenContainer from '../../../shared/ui/safeScreenContainer/SafeScreenContainer'
import CoffeIcone from '@/assets/images/icons/coffe'

export default function Success() {
    return (
        <SafeScreenContainer>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <CartTitle text="Заказ оформлен!" />
                </View>
                <View style={styles.image}>
                    <CoffeIcone />
                </View>
            </View>
        </SafeScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: { height: '100%', justifyContent: 'space-between' },
    textContainer: { alignItems: 'center' },
    image: { alignItems: 'center', justifyContent: 'center', flex: 1 },
})

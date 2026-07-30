import { StyleSheet, View } from 'react-native'
import { Colors, Radius, Spacing } from '../../../shared/tokens'
import AdressText from '../../../entities/location/ui/AdressText'
import AdressDescription from '../../../entities/location/ui/AdressDescription'
import CartItemList from '../../../widget/сartItemList/ui/CartItemList'
import ChangeLocationButton from '../../../features/changeLocation/ui/ChangeLocationButton'
import { CartTitle } from '../../../shared/ui/cartTitle/CartTitle'
import SafeScreenContainer from '../../../shared/ui/safeScreenContainer/SafeScreenContainer'
import OrderSummary from '../../../entities/cart/ui/CartSummary'

export default function Cart() {
    return (
        <View>
            <SafeScreenContainer style={styles.container}>
                <CartTitle text="Адрес доставки" />
                <AdressText color={Colors.charcoal} />
                <AdressDescription />
                <View style={styles.undeline}>
                    <ChangeLocationButton
                        text="Редактировать адрес"
                        style={styles.buttonContainer}
                    />
                </View>
                <CartItemList />
            </SafeScreenContainer>
            <SafeScreenContainer>
                <OrderSummary />
            </SafeScreenContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { gap: 10, borderWidth: 2, borderColor: Colors.lightSilver },
    buttonContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderRadius: Radius.br16,
        borderWidth: 1,
        borderColor: Colors.lightSilver,
        width: Spacing.s180,
        height: Spacing.s25,
    },
    undeline: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.paleGray,
        borderStyle: 'solid',
        paddingBottom: Spacing.s50,
    },
})

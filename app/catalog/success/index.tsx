import { StyleSheet } from 'react-native'
import { Colors, Radius } from '../../../shared/tokens'
import AdressText from '../../../entities/location/ui/AdressText'
import ChangeLocationButton from '../../../features/changeLocation/ui/ChangeLocationButton'
import { CartTitle } from '../../../shared/ui/cartTitle/CartTitle'
import AdressDescription from '../../../entities/location/ui/AdressDescription'
import SafeScreenContainer from '../../../shared/ui/safeScreenContainer/SafeScreenContainer'

export default function Success() {
    return (
        <SafeScreenContainer style={styles.container}>
            <CartTitle text="Адрес доставки" />
            <AdressText color={Colors.charcoal} />
            <AdressDescription />
            <ChangeLocationButton text="Редактировать адрес" style={styles.buttonContainer} />
        </SafeScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: { gap: 10 },
    buttonContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderRadius: Radius.br16,
        borderWidth: 1,
        width: 162,
        height: 27,
    },
})

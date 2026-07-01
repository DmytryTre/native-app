import { View, StyleSheet } from 'react-native'
import { Colors, Radius, Spacing } from '../../../shared/tokens'
import AdressText from '../../../entities/location/ui/AdressText'
import ChangeLocationButton from '../../../features/changeLocation/ui/ChangeLocationButton'
import { CartTitle } from '../../../shared/ui/cartTitle/CartTitle'
import AdressDescription from '../../../entities/location/ui/AdressDescription'

export default function Success() {
    return (
        <View style={styles.container}>
            <CartTitle text="Адрес доставки" />
            <AdressText color={Colors.charcoal} />
            <AdressDescription />
            <ChangeLocationButton text="Редактировать адрес" style={styles.buttonContainer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: Spacing.s30, gap: 10 },
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

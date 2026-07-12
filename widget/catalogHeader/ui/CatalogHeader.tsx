import { StyleSheet, View, Text } from 'react-native'
import { Spacing, Colors } from '../../../shared/tokens'
import SearchCoffee from '../../../features/filterCoffee/ui/SearchCoffee'
import AdressText from '../../../entities/location/ui/AdressText'
import ChangeLocationButton from '../../../features/changeLocation/ui/ChangeLocationButton'
import SafeScreenContainer from '../../../shared/ui/safeScreenContainer/SafeScreenContainer'

export default function CatalogHeader() {
    return (
        <SafeScreenContainer style={styles.container}>
            <Text style={styles.headerText}>Адрес</Text>
            <View style={styles.adressContainer}>
                <ChangeLocationButton
                    style={styles.adressContainer}
                    text={<AdressText color={Colors.lightSilver} />}
                    color={Colors.lightSilver}
                    fromCatalog={true}
                />
            </View>
            <SearchCoffee />
        </SafeScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
    },
    headerText: {
        color: Colors.lightSilver,
    },
    adressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingBottom: Spacing.s20,
    },
})

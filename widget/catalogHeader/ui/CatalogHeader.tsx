import { StyleSheet, View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Spacing, Colors } from '../../../shared/tokens'
import SearchCoffee from '../../../entities/searchCoffee/ui/SearchCoffee'
import AdressText from '../../../entities/location/ui/AdressText'
import ChangeLocationButton from '../../../features/changeLocation/ui/ChangeLocationButton'

export default function CatalogHeader() {
    const { top } = useSafeAreaInsets()

    return (
        <View style={{ ...styles.container, paddingTop: top }}>
            <Text style={styles.headerText}>Адрес</Text>
            <View style={styles.adressContainer}>
                <AdressText color={Colors.lightSilver} />
                <ChangeLocationButton color={Colors.lightSilver} />
            </View>
            <SearchCoffee />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Spacing.s30,
        backgroundColor: Colors.black,
    },
    headerText: {
        color: Colors.lightSilver,
    },
    adressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingBottom: 20,
    },
})

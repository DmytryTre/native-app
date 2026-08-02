import { View, StyleSheet } from 'react-native'

import CoffeeCatalog from '../../widget/coffeeCatalog/ui/CoffeeCatalog/CoffeeCatalog'
import CatalogHeader from '../../widget/catalogHeader/ui/CatalogHeader'
import { Colors } from '../../shared/tokens'

export default function Catalog() {
    return (
        <View style={styles.container}>
            <CatalogHeader />
            <CoffeeCatalog />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightSilver,
        height: '100%',
    },
})

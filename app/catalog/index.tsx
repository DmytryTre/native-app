import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar' // 1. Импортируем StatusBar

import CoffeeCatalog from '../../widget/coffeeCatalog/ui/CoffeeCatalog/CoffeeCatalog'
import CatalogHeader from '../../widget/catalogHeader/ui/CatalogHeader'
import { Colors } from '../../shared/tokens'

export default function Catalog() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <CatalogHeader />
            <CoffeeCatalog />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightSilver,
        paddingBottom: 235,
        height: '100%',
    },
})

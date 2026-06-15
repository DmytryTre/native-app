import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import { useSetAtom } from 'jotai'
import { getCoffeeAtom } from '../../entities/coffee/model/state'
import CoffeeCatalog from '../../entities/coffeeCatalog/CoffeeCatalog'
import Search from '../../features/search/ui/Search'
import { Colors } from '../../shared/tokens'

export default function Catalog() {
    const getCoffee = useSetAtom(getCoffeeAtom)

    useEffect(() => {
        getCoffee()
    }, [])

    return (
        <View style={styles.container}>
            <Search />
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

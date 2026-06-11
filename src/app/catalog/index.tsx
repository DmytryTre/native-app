import { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import { useSetAtom } from 'jotai'

import { getCoffeeAtom } from '../../../entities/coffee/model/state'
import CoffeeCatalog from './coffeeCatalog.tsx'
import Search from './search'
import { Colors } from '@/tokens'

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
        height: '100%',
    },
})

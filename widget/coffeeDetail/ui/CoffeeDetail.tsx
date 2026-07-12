import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { useAtomValue, useSetAtom } from 'jotai'
import { coffeeAtom, getCoffeeAtomById } from '../../../entities/coffee/model/state'
import Loader from '../../../shared/ui/loader/Loader'
import SafeScreenContainer from '../../../shared/ui/safeScreenContainer/SafeScreenContainer'
import CoffeeCard from '../../../entities/coffee/ui/CoffeeCard'
import CoffeeSizeSelector, {
    CoffeeSize,
} from '../../../features/coffeeSizeSelector/ui/CoffeeSizeSelector'
import { CartTitle } from '../../../shared/ui/cartTitle/CartTitle'

interface CoffeeDetailProps {
    id: number
}

export function CoffeeDetail({ id }: CoffeeDetailProps) {
    const { currentCoffee, isLoading, error } = useAtomValue(coffeeAtom)
    const getCoffeeById = useSetAtom(getCoffeeAtomById)
    const [selectedSize, setSelectedSize] = useState<CoffeeSize>('M')

    useEffect(() => {
        if (id) {
            getCoffeeById(id)
        }
    }, [id])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <Text>Ошибка: {error}</Text>
    }

    return (
        <SafeScreenContainer>
            <CoffeeCard variant="large" {...currentCoffee!} />
            <CartTitle text="Размер" />
            <CoffeeSizeSelector value={selectedSize} onChange={setSelectedSize} />
        </SafeScreenContainer>
    )
}

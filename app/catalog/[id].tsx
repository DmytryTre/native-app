import { useLocalSearchParams } from 'expo-router'
import { CoffeeDetail } from '../../widget/coffeeDetail/ui/CoffeeDetail'

export default function CoffeeCard() {
    const { id } = useLocalSearchParams()

    return (
        <>
            <CoffeeDetail id={Number(id)} />
        </>
    )
}

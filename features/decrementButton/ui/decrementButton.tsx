import { useSetAtom } from 'jotai'
import { StyleProp, ViewStyle } from 'react-native'
import { removeFromCartAtom } from '../../../entities/cart/model/state'
import { CoffeeSize } from '../../../entities/cart/model/interfaces'
import CounterButton from '../../../shared/ui/button/CounterButton'

interface AddButtonProps {
    id: number
    size?: CoffeeSize
    style?: StyleProp<ViewStyle>
    onSuccess?: () => void
}

export default function DecrementButton({ id, size, style, onSuccess, ...props }: AddButtonProps) {
    const removeCoffe = useSetAtom(removeFromCartAtom)

    const handlePress = () => {
        removeCoffe({ id, size })

        if (onSuccess) {
            onSuccess()
        }
    }

    return <CounterButton text="-" onPress={handlePress} style={style} {...props} />
}

import { useSetAtom } from 'jotai'
import Button from '../../../shared/ui/button/Button'
import { StyleProp, ViewStyle } from 'react-native'
import { addToCartAtom } from '../../../entities/cart/model/state'
import { CoffeeSize } from '../../../entities/cart/model/interfaces'
import CounterButton from '../../../shared/ui/button/CounterButton'

interface AddButtonProps {
    id: number
    text: string
    size?: CoffeeSize
    style?: StyleProp<ViewStyle>
    isCounter?: boolean
    onSuccess?: () => void
}

export default function AddButton({
    id,
    text,
    size = 'M',
    style,
    onSuccess,
    isCounter = false,
    ...props
}: AddButtonProps) {
    const addToCart = useSetAtom(addToCartAtom)

    const handlePress = () => {
        addToCart({ id, size })

        if (onSuccess) {
            onSuccess()
        }
    }

    const ButtonComponent = isCounter ? CounterButton : Button

    return <ButtonComponent text={text} onPress={handlePress} style={style} {...props} />
}

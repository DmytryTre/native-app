import { useSetAtom, useAtomValue } from 'jotai'
import Button from '../../../shared/ui/button/Button'
import { StyleProp, ViewStyle } from 'react-native'
import { cartDetailedItemsAtom, sendOrderAtom } from '../../../entities/cart/model/state'
import { coffeeAtom } from '../../../entities/coffee/model/state'
import { router } from 'expo-router'

interface SendOrderButtonProps {
    style?: StyleProp<ViewStyle>
    onSuccess?: () => void
}

export default function SendOrderButton({ style }: SendOrderButtonProps) {
    const { isLoading } = useAtomValue(coffeeAtom)
    const flatCartItems = useAtomValue(cartDetailedItemsAtom)

    const sendOrder = useSetAtom(sendOrderAtom)

    type NotificationsModuleType = typeof import('expo-notifications')

    const scheduleSuccessNotification = async () => {
        try {
            const Notifications: NotificationsModuleType = await import('expo-notifications')

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Ваш кофе готов!',
                    body: 'Заказ успешно выполнен',
                    data: { screen: 'success' },
                },
                trigger: {
                    type: Notifications['SchedulableTriggerInputTypes']['TIME_INTERVAL'],
                    seconds: 10,
                },
            })
        } catch (error) {
            console.log('Отправка уведомления пропущена (ограничение среды Expo Go):', error)
        }
    }

    const handlePress = async () => {
        await sendOrder()

        await scheduleSuccessNotification()

        router.replace('/catalog/cart/success')
    }

    return (
        <Button
            text="Отправить"
            onPress={handlePress}
            style={style}
            disabled={isLoading || !flatCartItems.length}
        />
    )
}

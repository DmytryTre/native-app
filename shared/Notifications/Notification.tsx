import { useEffect } from 'react'
import Constants, { ExecutionEnvironment } from 'expo-constants'

type NotificationsModuleType = typeof import('expo-notifications')

async function startNativeNotificationServices() {
    const Notifications: NotificationsModuleType = await import('expo-notifications')

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldPlaySound: true,
            shouldSetBadge: true,
            shouldShowAlert: true,
            shouldShowBanner: true,
            shouldShowList: true,
        }),
    })

    const subReceived = Notifications.addNotificationReceivedListener((notification) => {
        console.log('Уведомление получено:', notification.request.content.data)
    })

    return subReceived
}

export default function Notification() {
    useEffect(() => {
        let subscription: { remove: () => void } | null = null

        if (Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
            console.log('Запуск в Expo Go: Инициализация уведомлений пропущена.')
            return
        }

        const init = async () => {
            try {
                subscription = await startNativeNotificationServices()
            } catch (error) {
                console.error('Ошибка инициализации пушей в нативной сборке:', error)
            }
        }

        init()

        return () => {
            if (subscription && typeof subscription.remove === 'function') {
                subscription.remove()
            }
        }
    }, [])

    return null
}

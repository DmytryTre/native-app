import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { NavigationRoute, ParamListBase } from '@react-navigation/native'

export type HandlePressProps = {
    route: NavigationRoute<ParamListBase, string>
    navigation: BottomTabBarProps['navigation']
}

export enum tabNames {
    index = 'Главная',
    success = 'Заказ',
}

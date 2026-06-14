import BugIcone from '@/assets/images/icons/bug'
import HomeIcone from '@/assets/images/icons/home'
import RectangleIcone from '@/assets/images/icons/rectangle'
import { Colors, Radius } from '@/tokens'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { NavigationRoute, ParamListBase, TabNavigationState } from '@react-navigation/native'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

type HandlePressProps = {
    route: NavigationRoute<ParamListBase, string>
    navigation: BottomTabBarProps['navigation']
    state: BottomTabBarProps['state']
}

enum tabNames {
    index = 'Главная',
    success = 'Заказ',
}

export default function TabBar({ state, navigation }: BottomTabBarProps) {
    const handlePress = (props: HandlePressProps) => {
        const { route, navigation: nav, state: tabState } = props
        const event = navigation?.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        })

        const isFocused = isTabFoced(tabState, route)

        if (!isFocused && !event?.defaultPrevented) {
            nav.navigate(route.name, route.params)
        }
    }

    const isTabFoced = (
        tabState: TabNavigationState<ParamListBase>,
        route: HandlePressProps['route'],
    ) => tabState.index === tabState.routes.findIndex((r) => r.key === route.key)

    const renderIcone = (isFocused: boolean, name: string) => {
        return (
            <View style={styles.icone}>
                {name === 'index' && <HomeIcone isFocused={isFocused} />}
                {name === 'success' && <BugIcone isFocused={isFocused} />}
                {isFocused && <RectangleIcone />}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { name, key } = route

                const currentTabKey = name as keyof typeof tabNames

                const tabLabel = tabNames[currentTabKey] || name

                const isFocused = isTabFoced(state, route)

                return (
                    <View key={key} style={styles.tabContainer}>
                        {index !== 0 && <View style={styles.divider} />}
                        <TouchableOpacity
                            onPress={() => handlePress({ route, navigation, state })}
                            style={styles.tab}
                        >
                            {renderIcone(isFocused, name)}
                            <Text style={styles.text}>{tabLabel}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        width: 1,
        height: 46,
        marginHorizontal: 40,
        backgroundColor: Colors.ultraLightGray,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 99,
        borderRadius: Radius.br16,
    },
    tabContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    tab: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    text: {
        color: Colors.mediumGray,
    },
    icone: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        height: 34,
    },
})

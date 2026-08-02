import BugIcon from '@/assets/images/icons/bug'
import HomeIcon from '@/assets/images/icons/home'
import RectangleIcon from '@/assets/images/icons/rectangle'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { tabNames } from './interfaces'
import { Spacing, Colors, Radius } from '@/../shared/tokens'

export default function TabBar({ state, navigation }: BottomTabBarProps) {
    const renderIcon = (isFocused: boolean, name: string) => {
        const isCatalogIndex = name === 'index'
        const isCartTab = name.startsWith('cart')
        return (
            <View style={styles.icone}>
                {isCatalogIndex && <HomeIcon isFocused={isFocused} />}
                {isCartTab && <BugIcon isFocused={isFocused} />}
                {isFocused && <RectangleIcon />}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {state.routes.reduce<React.JSX.Element[]>((acc, route) => {
                const { name, key } = route

                const isCartTab = name === 'cart' || name === 'cart/index'
                const isIndexTab = name === 'index'

                if (!isIndexTab && !isCartTab) {
                    return acc
                }

                const cleanName = isCartTab ? 'cart' : 'index'

                const activeRoute = state.routes[state.index]
                const isActiveRouteCart = activeRoute?.name.startsWith('cart')
                const isActiveRouteIndex = activeRoute?.name === 'index'

                const isFocused =
                    (cleanName === 'cart' && isActiveRouteCart) ||
                    (cleanName === 'index' && isActiveRouteIndex)

                const currentTabKey = cleanName as keyof typeof tabNames
                const tabLabel = tabNames[currentTabKey] || cleanName

                const renderIndex = acc.length

                const onTabPress = () => {
                    if (isCartTab) {
                        navigation.navigate('cart', { screen: 'index' })
                    } else {
                        navigation.navigate(route.name, route.params)
                    }
                }

                acc.push(
                    <View key={key} style={styles.tabContainer}>
                        {renderIndex !== 0 && <View style={styles.divider} />}

                        <TouchableOpacity
                            onPress={onTabPress}
                            accessibilityLabel={tabLabel}
                            accessibilityRole="tab"
                            accessibilityState={{ selected: isFocused }}
                            style={styles.tab}
                        >
                            {renderIcon(isFocused, cleanName)}
                            <Text style={styles.text}>{tabLabel}</Text>
                        </TouchableOpacity>
                    </View>,
                )

                return acc
            }, [])}
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        width: 1,
        height: Spacing.s46,
        marginHorizontal: 40,
        backgroundColor: Colors.ultraLightGray,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: Spacing.s99,
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
        height: Spacing.s34,
    },
})

import BugIcone from '@/assets/images/icons/bug'
import HomeIcone from '@/assets/images/icons/home'
import RectangleIcone from '@/assets/images/icons/rectangle'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { HandlePressProps, tabNames } from './interfaces'
import { Spacing, Colors, Radius } from '@/../shared/tokens'

export default function TabBar({ state, navigation }: BottomTabBarProps) {
    const handlePress = ({ route, navigation }: HandlePressProps) => {
        navigation.navigate(route.name, route.params)
    }

    const renderIcon = (isFocused: boolean, name: string) => {
        const isCatalogIndex = name === 'index'
        const isSuccessTab = name.startsWith('success')
        return (
            <View style={styles.icone}>
                {isCatalogIndex && <HomeIcone isFocused={isFocused} />}
                {isSuccessTab && <BugIcone isFocused={isFocused} />}
                {isFocused && <RectangleIcone />}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {state.routes.reduce<React.JSX.Element[]>((acc, route) => {
                const { name, key } = route

                const isSuccessTab = name === 'success/index'
                const isIndexTab = name === 'index'

                if (!isIndexTab && !isSuccessTab) {
                    return acc
                }

                const cleanName = isSuccessTab ? 'success' : 'index'

                const activeRoute = state.routes[state.index]
                const isActiveRouteSuccess = activeRoute?.name.startsWith('success')
                const isActiveRouteIndex = activeRoute?.name === 'index'

                const isFocused =
                    (cleanName === 'success' && isActiveRouteSuccess) ||
                    (cleanName === 'index' && isActiveRouteIndex)

                const currentTabKey = cleanName as keyof typeof tabNames
                const tabLabel = tabNames[currentTabKey] || cleanName

                const renderIndex = acc.length

                acc.push(
                    <View key={key} style={styles.tabContainer}>
                        {renderIndex !== 0 && <View style={styles.divider} />}

                        <TouchableOpacity
                            onPress={() => handlePress({ route, navigation })}
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

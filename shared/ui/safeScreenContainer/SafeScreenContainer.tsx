import React, { ReactNode } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Spacing } from '../../tokens'

interface SafeScreenContainerProps {
    children: ReactNode
    style?: ViewStyle
}

export default function SafeScreenContainer({ children, style }: SafeScreenContainerProps) {
    const { top } = useSafeAreaInsets()

    return <View style={[styles.container, { paddingTop: top }, style]}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        padding: Spacing.s30,
    },
})

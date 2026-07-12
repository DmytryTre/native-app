import React from 'react'
import { View, ActivityIndicator, StyleSheet, ActivityIndicatorProps } from 'react-native'
import { Colors } from '../../tokens' // импортируйте ваши токены цветов

interface LoaderProps {
    size?: ActivityIndicatorProps['size']
    color?: string
}

export default function Loader({ size = 'large' }: LoaderProps) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={Colors.black} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

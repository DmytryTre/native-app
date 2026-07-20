import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { Fonts, Spacing } from '../../tokens'

interface HeaderProps {
    title: string
}

export default function HeaderWithBackButton({ title }: HeaderProps) {
    const { back, replace, dismissAll, canDismiss } = useRouter()
    const { from } = useLocalSearchParams<{ from?: string }>()
    const { top } = useSafeAreaInsets()

    const handleBackPress = () => {
        if (from === 'catalog') {
            if (canDismiss()) {
                dismissAll()
            }
            replace('/catalog')
        } else {
            back()
        }
    }

    return (
        <View style={[styles.header, { paddingTop: top }]}>
            <View style={styles.leftContainer}>
                <Pressable onPress={() => handleBackPress()} style={styles.button}>
                    <Ionicons name="chevron-back" size={24} color="#1C1F24" />
                </Pressable>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
            </View>

            <View style={styles.rightContainer} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Spacing.s16,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
        height: Spacing.s30,
    },
    titleContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: Spacing.s30,
    },
    rightContainer: {
        flex: 1,
    },
    button: {
        padding: Spacing.s4,
    },
    titleText: {
        fontSize: Fonts.fs18,
        fontFamily: Fonts.semibold,
    },
})

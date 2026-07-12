import React from 'react'
import { StyleSheet, FlatList, StyleProp, ViewStyle, View } from 'react-native'
import Button, { ButtonVariant } from './button'
import { Gaps } from '../../tokens'

export interface TabItem<T> {
    id: string | number
    label: string
    isSelected: boolean
    value: T
}

interface SegmentedTabsProps<T> {
    data: TabItem<T>[]
    onSelect: (value: T) => void
    variant?: ButtonVariant
    containerStyle?: StyleProp<ViewStyle>
    contentStyle?: StyleProp<ViewStyle>
    itemStyle?: StyleProp<ViewStyle>
}

export default function SegmentedTabs<T>({
    data,
    onSelect,
    variant = 'solid',
    containerStyle,
    contentStyle,
    itemStyle,
}: SegmentedTabsProps<T>) {
    if (variant === 'outline') {
        return (
            <View style={[styles.rowContainer, containerStyle]}>
                {data.map((item) => (
                    <Button
                        key={item.id}
                        text={item.label}
                        isSelect={item.isSelected}
                        onPress={() => onSelect(item.value)}
                        variant={variant}
                        style={itemStyle}
                    />
                ))}
            </View>
        )
    }

    return (
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={containerStyle}
            contentContainerStyle={[styles.content, contentStyle]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Button
                    text={item.label}
                    isSelect={item.isSelected}
                    onPress={() => onSelect(item.value)}
                    variant={variant}
                    style={itemStyle}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    content: {
        gap: Gaps.g10,
    },
    rowContainer: {
        flexDirection: 'row',
        gap: Gaps.g10,
    },
})

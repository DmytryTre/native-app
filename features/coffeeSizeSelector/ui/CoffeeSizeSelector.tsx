import React from 'react'
import { StyleSheet } from 'react-native'
import SegmentedTabs, { TabItem } from '../../../shared/ui/segmentedTabs/SegmentedTabs'
import { Spacing } from '../../../shared/tokens'

const SIZES = ['S', 'M', 'L'] as const

export type CoffeeSize = (typeof SIZES)[number]

interface CoffeeSizeSelectorProps {
    value: CoffeeSize
    onChange: (size: CoffeeSize) => void
}

export default function CoffeeSizeSelector({ value, onChange }: CoffeeSizeSelectorProps) {
    const sizeTabs: TabItem<CoffeeSize>[] = SIZES.map((size: CoffeeSize) => ({
        id: size,
        label: size,
        isSelected: size === value,
        value: size,
    }))

    return (
        <SegmentedTabs
            data={sizeTabs}
            onSelect={onChange}
            variant="outline"
            itemStyle={styles.itemStyle}
        />
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        flex: 1,
        height: Spacing.s44,
    },
})

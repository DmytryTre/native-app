import React from 'react'
import { useAtomValue, useSetAtom } from 'jotai'

import { Spacing } from '../../../shared/tokens'
import { coffeeTypesAtom, setFiltersCoffeeAtom } from '../../filterCoffee/model/state'
import SegmentedTabs, { TabItem } from '../../../shared/ui/segmentedTabs/SegmentedTabs'

export default function FilterTabs() {
    const setFilters = useSetAtom(setFiltersCoffeeAtom)
    const coffeeTypes = useAtomValue(coffeeTypesAtom)

    const tabsData: TabItem<string>[] = coffeeTypes.map(({ type, name, isSelect }) => ({
        id: type,
        label: name,
        isSelected: isSelect,
        value: type,
    }))

    const handlePress = (type: string) => {
        setFilters({ type })
    }

    return (
        <SegmentedTabs
            data={tabsData}
            onSelect={handlePress}
            containerStyle={{ marginLeft: Spacing.s30 }}
            contentStyle={{ paddingVertical: Spacing.s30 }}
        />
    )
}

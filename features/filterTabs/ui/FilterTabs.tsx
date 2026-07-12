import React from 'react'
import { useAtomValue, useSetAtom } from 'jotai'

import { Spacing } from '../../../shared/tokens'
import { coffeeTypesAtom, setFiltersCoffeeAtom } from '../../filterCoffee/model/state'
import SegmentedTabs, { TabItem } from '../../../shared/ui/segmentedTabs/SegmentedTabs'

export default function FilterTabs() {
    const setFilters = useSetAtom(setFiltersCoffeeAtom)
    const coffeeTypes = useAtomValue(coffeeTypesAtom)

    const tabsData: TabItem<string>[] = coffeeTypes.map((item) => ({
        id: item.type,
        label: item.name,
        isSelected: item.isSelect,
        value: item.type,
    }))

    const handlePress = (type: string) => {
        setFilters({ type })
    }

    return (
        <SegmentedTabs
            data={tabsData}
            onSelect={handlePress} // TypeScript строго следит, чтобы handlePress принимал string
            containerStyle={{ marginLeft: Spacing.s30 }}
            contentStyle={{ paddingVertical: Spacing.s30 }}
        />
    )
}

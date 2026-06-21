import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { setFiltersCoffeeAtom } from '../../../features/filterCoffee/model/state'
import Input from '../../../shared/ui/input/Input'

export default function SearchCoffee() {
    const [text, setText] = useState<string>('')
    const setFilters = useSetAtom(setFiltersCoffeeAtom)

    const handleSend = (text: string) => {
        setFilters({ text: text })
    }

    return (
        <Input
            value={text}
            onChangeText={setText}
            onSubmitEditing={() => handleSend(text)}
            onBlur={() => handleSend(text)}
            placeholder="Найти кофе"
        />
    )
}

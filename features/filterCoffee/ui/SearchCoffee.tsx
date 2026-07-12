import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { setFiltersCoffeeAtom } from '../model/state'
import InputSearch from '../../../shared/ui/inputSearch/InputSearch'

export default function SearchCoffee() {
    const [text, setText] = useState<string>('')
    const setFilters = useSetAtom(setFiltersCoffeeAtom)

    const handleSend = (text: string) => {
        setFilters({ text: text })
    }

    return (
        <InputSearch
            value={text}
            onChangeText={setText}
            onSubmitEditing={() => handleSend(text)}
            onBlur={() => handleSend(text)}
            placeholder="Найти кофе"
        />
    )
}

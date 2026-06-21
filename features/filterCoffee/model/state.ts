import { atom } from 'jotai'
import { CoffeeRequest } from '../../../entities/coffee/model/interfaces'
import { coffeeAtom, getCoffeeAtom } from '../../../entities/coffee/model/state'

export const coffeeTypesAtom = atom([
    { name: 'Все', type: 'all', isSelect: true },
    { name: 'Капучино', type: 'cappuccino', isSelect: false },
    { name: 'Латте', type: 'latte', isSelect: false },
    { name: 'Макиатто', type: 'macchiato', isSelect: false },
    { name: 'Американо', type: 'americano', isSelect: false },
])

export const setFiltersCoffeeAtom = atom(null, (get, set, { type, text }: CoffeeRequest) => {
    const currentState = get(coffeeAtom)
    const coffeeTypes = get(coffeeTypesAtom)

    const updatedFilters = {
        type: type !== undefined ? type : currentState.filters?.type,
        text: text !== undefined ? text : currentState.filters?.text,
    }

    if (type) {
        const updatedTypes = coffeeTypes.map((item) => ({
            ...item,
            isSelect: item.type === type,
        }))
        set(coffeeTypesAtom, updatedTypes)
    }

    set(coffeeAtom, {
        ...currentState,
        filters: updatedFilters,
    })

    set(getCoffeeAtom)
})

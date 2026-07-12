import { useAtomValue } from 'jotai'
import { savedAddressAtom } from '../model/state'
import { CartDescription } from '../../../shared/ui/cartDescription/CartDescription'

export default function AdressDescription() {
    const { description } = useAtomValue(savedAddressAtom)

    return <CartDescription text={description} />
}

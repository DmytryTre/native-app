import { StyleSheet, View, Image } from 'react-native'
import { CartDetailedItem } from '../model/interfaces'
import { CartTitle } from '../../../shared/ui/cartTitle/CartTitle'
import { CartDescription } from '../../../shared/ui/cartDescription/CartDescription'

export default function CartItemInfo({
    name,
    size = 'M',
    subTitle,
    image,
}: CartDetailedItem['info']) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="cover" source={{ uri: image }} />
            <View style={styles.text}>
                <CartTitle text={name} style={styles.title} />
                <CartDescription text={`${subTitle} / ${size}`} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 54,
    },
    image: {
        width: 54,
    },
    text: {
        flexDirection: 'column',
        height: 54,
        paddingHorizontal: 10,
    },
    title: {
        paddingTop: 0,
        paddingBottom: 0,
    },
})

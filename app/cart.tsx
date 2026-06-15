import { StyleSheet, Text, View, Image } from 'react-native'
import { BlurView } from 'expo-blur'
import { Colors, Radius, Fonts, Spacing } from '../shared/tokens'
import { CoffeeData } from '../entities/coffee/model/interfaces'

export default function Cart({ name, image, subTitle, price, rating }: CoffeeData) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode="cover" source={{ uri: image }} />
                <View style={styles.ratingWrapper}>
                    <BlurView intensity={70} tint="dark" style={styles.rating}>
                        <Text style={styles.star}>⭐</Text>
                        <Text style={styles.ratingText}>{rating}</Text>
                    </BlurView>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
                <Text style={styles.price}>{price} ₽</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        flexDirection: 'column',
        backgroundColor: Colors.white,
        borderRadius: Radius.br16,
        padding: Spacing.s5,
    },
    ratingWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottomRightRadius: Radius.br16,
        borderTopLeftRadius: Radius.br16,
        overflow: 'hidden',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 51,
        height: Spacing.s25,
    },
    star: {
        fontSize: 8,
        marginRight: Spacing.s4,
    },
    ratingText: {
        textAlign: 'center',
        fontSize: Fonts.fs10,
        color: Colors.white,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
    },
    image: {
        width: '100%',
        height: Spacing.s132,
        borderRadius: Radius.br16,
    },
    textContainer: {
        padding: Spacing.s10,
    },
    title: {
        fontSize: Fonts.fs16,
        color: Colors.charcoal,
    },
    subTitle: {
        fontSize: Fonts.fs13,
        color: Colors.mediumGray,
    },
    price: {
        fontFamily: Fonts.semibold,
        color: Colors.darkBlue,
        fontWeight: '600',
        fontSize: Fonts.fs18,
    },
})

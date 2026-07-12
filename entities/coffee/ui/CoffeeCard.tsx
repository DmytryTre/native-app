import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { BlurView } from 'expo-blur'
import { Colors, Radius, Fonts, Spacing } from '@/../shared/tokens'
import { CoffeeData } from '../model/interfaces'
import { CartTitle } from '../../../shared/ui/cartTitle/CartTitle'
import { CartDescription } from '../../../shared/ui/cartDescription/CartDescription'

interface CoffeeCardProps extends CoffeeData {
    variant?: 'small' | 'large'
    onPress?: () => void
}

export default function CoffeeCard({
    name,
    image,
    subTitle,
    price,
    rating,
    description,
    variant = 'small',
    onPress,
}: CoffeeCardProps) {
    const isLarge = variant === 'large'

    const renderRatingRow = () => (
        <>
            <Text style={styles.star}>⭐</Text>
            <Text style={[styles.ratingText, isLarge && styles.ratingTextLarge]}>{rating}</Text>
        </>
    )

    if (isLarge) {
        if (isLarge) {
            return (
                <View style={styles.containerLarge}>
                    <Image style={styles.imageLarge} resizeMode="cover" source={{ uri: image }} />

                    <View style={styles.detailsHeader}>
                        <View style={styles.titleWrapper}>
                            <CartTitle text={name} />
                            <CartDescription text={subTitle} />
                        </View>
                        <View style={styles.ratingDetailsRow}>{renderRatingRow()}</View>
                    </View>

                    {description && (
                        <View style={styles.descriptionContainer}>
                            <CartTitle text="Описание" style={styles.cartTitle} />
                            <CartDescription text={description} />
                        </View>
                    )}
                </View>
            )
        }
    }

    return (
        <Pressable onPress={onPress} style={styles.containerSmall}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageSmall} resizeMode="cover" source={{ uri: image }} />
                <View style={styles.ratingAbsoluteWrapper}>
                    <BlurView intensity={70} tint="dark" style={styles.ratingBlur}>
                        {renderRatingRow()}
                    </BlurView>
                </View>
            </View>

            <View style={styles.textContainerSmall}>
                <CartTitle text={name} />
                <CartDescription text={subTitle} />
                <Text style={styles.priceSmall}>{price} ₽</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    // --- Общие стили элементов ---
    star: {
        fontSize: 12,
        marginRight: Spacing.s4,
    },
    ratingText: {
        textAlign: 'center',
        fontSize: Fonts.fs10,
        color: Colors.white,
    },

    // --- Стили для МАЛЕНЬКОЙ карточки (Каталог) ---
    containerSmall: {
        width: 150,
        minHeight: 240,
        flexDirection: 'column',
        backgroundColor: Colors.white,
        borderRadius: Radius.br16,
        padding: Spacing.s5,
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
    },
    imageSmall: {
        width: '100%',
        height: Spacing.s132,
        borderRadius: Radius.br16,
    },
    ratingAbsoluteWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderBottomRightRadius: Radius.br16,
        borderTopLeftRadius: Radius.br16,
        overflow: 'hidden',
    },
    ratingBlur: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 51,
        height: Spacing.s25,
    },
    textContainerSmall: {
        flex: 1,
        padding: Spacing.s10,
    },
    priceSmall: {
        fontFamily: Fonts.semibold,
        color: Colors.darkBlue,
        fontWeight: '600',
        fontSize: Fonts.fs18,
        marginTop: 'auto',
    },

    // --- Стили для БОЛЬШОЙ карточки (Экран деталей) ---
    containerLarge: {
        width: '100%',
    },
    imageLarge: {
        width: '100%',
        height: 200,
        borderRadius: Radius.br16,
    },
    detailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: Spacing.s16,
        borderBottomWidth: 2,
        borderBottomColor: Colors.paleGray,
        borderStyle: 'solid',
        paddingBottom: Spacing.s25,
    },
    titleWrapper: {
        flex: 1,
    },
    ratingDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingTextLarge: {
        color: Colors.black,
        fontSize: Fonts.fs16,
        fontWeight: '600',
    },

    descriptionContainer: {
        marginTop: Spacing.s16,
    },

    cartTitle: {
        paddingTop: 0,
    },
})

import { Image, StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'

import Title from '@/shared/Title/Title'
import Button from '../../shared/Button/Button'
import { Colors, Fonts, Gaps, Spacing } from '../../tokens'

export default function HomeScreen() {
    const handlePress = () => {
        router.replace('/catalog')
    }

    return (
        <View style={styles.page}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../../../assets/images/coffee.png')}
            />
            <View style={styles.content}>
                <Title text="Одно из самых вкусных кофе в городе!" />
                <Text style={styles.text}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
                <Button text="Начать" onPress={handlePress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: Colors.black,
    },
    image: {
        position: 'absolute',
        top: 0,
        height: '70%',
        width: '100%',
    },
    content: {
        gap: Gaps.g50,
        padding: Spacing.s30,
    },
    text: {
        fontSize: Fonts.fs14,
        color: Colors.darkGray,
        textAlign: 'center',
        fontFamily: Fonts.regular,
    },
})

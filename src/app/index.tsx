import { Image, StyleSheet, Text, View } from 'react-native'

import Title from '@/shared/Title/Title'
import Button from '../shared/Button/Button'
import { Colors, FontSize, Gaps, Padding } from '../tokens'

export default function HomeScreen() {
    return (
        <View style={styles.page}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../../assets/images/coffee.png')}
            />
            <View style={styles.content}>
                <Title text="Одно из самых вкусных кофе в городе!" />
                <Text style={styles.text}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
                <Button text="Начать" />
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
        padding: Padding.p30,
    },
    text: {
        fontSize: FontSize.fs14,
        color: Colors.darkGray,
        textAlign: 'center',
    },
})

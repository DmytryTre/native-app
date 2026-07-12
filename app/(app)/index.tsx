import { Image, StyleSheet, Text, View } from 'react-native'
import { router } from 'expo-router'

import { Colors, Fonts, Gaps } from '../../shared/tokens'
import Title from '../../shared/ui/title/Title'
import Button from '../../shared/ui/button/Button'
import SafeScreenContainer from '../../shared/ui/safeScreenContainer/SafeScreenContainer'

export default function HomeScreen() {
    const handlePress = () => {
        router.replace('/catalog')
    }

    return (
        <View style={styles.page}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../../assets/images/coffee.png')}
            />
            <SafeScreenContainer style={styles.content}>
                <Title text="Одно из самых вкусных кофе в городе!" />
                <Text style={styles.text}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
                <Button text="Начать" onPress={handlePress} />
            </SafeScreenContainer>
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
    },
    text: {
        fontSize: Fonts.fs14,
        color: Colors.darkGray,
        textAlign: 'center',
        fontFamily: Fonts.regular,
    },
})

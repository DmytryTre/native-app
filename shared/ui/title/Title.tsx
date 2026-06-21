import { useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../tokens'

export default function Title({ text }: { text: string }) {
    const positionValueY = useRef(new Animated.Value(-500)).current

    const opacity = positionValueY.interpolate({
        inputRange: [-500, 0],
        outputRange: [0, 1],
    })

    const onEnter = () => {
        Animated.timing(positionValueY, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
        }).start()
    }

    return (
        <Animated.View
            onLayout={onEnter}
            style={{
                transform: [
                    {
                        translateY: positionValueY,
                    },
                ],
            }}
        >
            <Animated.Text style={[styles.title, { opacity: opacity }]}>{text}</Animated.Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: Fonts.fs34,
        color: Colors.white,
        textAlign: 'center',
        fontFamily: Fonts.regular,
    },
})

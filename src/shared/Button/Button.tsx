import { Colors, Spacing, Fonts, Radius } from '@/tokens'
import { useRef } from 'react'
import { Animated, Pressable, PressableProps, StyleSheet, Text } from 'react-native'

const Button = ({ text, ...props }: PressableProps & { text: string }) => {
    const animValue = useRef(new Animated.Value(0)).current

    const color = animValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.warmBrown, Colors.warmBrownHover],
    })

    const handleFade = (isPress: boolean, animValue: Animated.Value) => {
        Animated.timing(animValue, {
            toValue: isPress ? 100 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start()
    }

    return (
        <Pressable
            {...props}
            onPressIn={() => handleFade(true, animValue)}
            onPressOut={() => handleFade(false, animValue)}
        >
            <Animated.View style={[styles.button, { backgroundColor: color }]}>
                <Text style={styles.text}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Spacing.s63,
        borderRadius: Radius.br16,
    },
    text: {
        fontSize: Fonts.fs16,
        color: Colors.white,
        fontFamily: Fonts.regular,
    },
})
export default Button

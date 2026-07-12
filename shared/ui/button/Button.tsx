import { useRef } from 'react'
import { Animated, Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import { Colors, Spacing, Radius, Fonts } from '../../tokens'

const Button = ({ text, disabled, ...props }: PressableProps & { text: string }) => {
    const animValue = useRef(new Animated.Value(0)).current

    const color = animValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.warmBrown, Colors.warmBrownHover],
    })

    const handleFade = (isPress: boolean, animValue: Animated.Value) => {
        if (disabled) return

        Animated.timing(animValue, {
            toValue: isPress ? 100 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start()
    }

    return (
        <Pressable
            {...props}
            disabled={disabled}
            onPressIn={() => handleFade(true, animValue)}
            onPressOut={() => handleFade(false, animValue)}
        >
            <Animated.View
                style={[
                    styles.button,
                    { backgroundColor: color },
                    disabled && styles.disabledButton,
                ]}
            >
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
    disabledButton: {
        opacity: 0.5,
    },
    text: {
        fontSize: Fonts.fs16,
        color: Colors.white,
        fontFamily: Fonts.regular,
    },
})
export default Button

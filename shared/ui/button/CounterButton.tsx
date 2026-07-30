import { useRef } from 'react'
import {
    Animated,
    Pressable,
    PressableProps,
    StyleSheet,
    Text,
    ViewStyle,
    StyleProp,
} from 'react-native'
import { Colors, Spacing, Radius, Fonts } from '../../tokens'

interface CounterButtonProps extends PressableProps {
    text: string
    style?: StyleProp<ViewStyle & { hoverBackgroundColor?: string }>
}

const CounterButton = ({ text, disabled, style, ...props }: CounterButtonProps) => {
    const animValue = useRef(new Animated.Value(0)).current

    const baseColor = Colors.white
    const hoverColor = Colors.mediumGray
    const textColor = Colors.darkGray

    const color = animValue.interpolate({
        inputRange: [0, 100],
        outputRange: [baseColor, hoverColor],
    })

    const handleFade = (isPress: boolean, animValue: Animated.Value) => {
        if (disabled) return

        Animated.timing(animValue, {
            toValue: isPress ? 100 : 0,
            duration: 100,
            useNativeDriver: false,
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
                    style,
                    { backgroundColor: color },
                    disabled && styles.disabledButton,
                ]}
            >
                <Text style={[styles.text, { color: textColor }]}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Spacing.s28,
        width: Spacing.s28,
        borderRadius: Radius.br20,
        borderWidth: 1,
        borderColor: Colors.paleGray,
    },
    disabledButton: {
        opacity: 0.5,
    },
    text: {
        fontSize: Fonts.fs18,
        fontFamily: Fonts.regular,
        color: Colors.black,
    },
})

export default CounterButton

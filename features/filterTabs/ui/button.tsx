import { Colors, Dimensions, FontSize, Radius, Spacing } from '@/tokens'
import { useEffect, useRef } from 'react'
import { Animated, Pressable, PressableProps, StyleSheet } from 'react-native'

const Button = ({
    text,
    isSelect,
    ...props
}: PressableProps & { text: string; isSelect: boolean }) => {
    useEffect(() => {
        handleFade(animValue)
    }, [isSelect])

    const animValue = useRef(new Animated.Value(0)).current

    const color = animValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.white, Colors.warmBrown],
    })

    const fontColor = animValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.darkBlue, Colors.white],
    })

    const handleFade = (animValue: Animated.Value) => {
        Animated.timing(animValue, {
            toValue: isSelect ? 100 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start()
    }

    return (
        <Pressable {...props}>
            <Animated.View style={[styles.button, { backgroundColor: color }]}>
                <Animated.Text style={[styles.text, { color: fontColor }]}>{text}</Animated.Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.h38,
        borderRadius: Radius.br12,
        paddingHorizontal: Spacing.s16,
    },
    text: {
        fontSize: FontSize.fs16,
        fontFamily: 'SoraSans',
    },
})
export default Button

import React, { useEffect, useRef } from 'react'
import { Animated, Pressable, PressableProps, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { Colors, Radius, Spacing, Fonts } from '../../tokens'

// Определяем два типа дизайна кнопок
export type ButtonVariant = 'solid' | 'outline'

interface ButtonProps extends PressableProps {
    text: string
    isSelect: boolean
    variant?: ButtonVariant // Передаем вариант внешнего вида
    style?: StyleProp<ViewStyle>
}

export default function Button({
    text,
    isSelect,
    variant = 'solid',
    style,
    ...props
}: ButtonProps) {
    const animValue = useRef(new Animated.Value(isSelect ? 1 : 0)).current

    // Настройки цветов для каждого варианта [неактивный, активный]
    const colorsConfig = {
        solid: {
            background: [Colors.white, Colors.warmBrown],
            text: [Colors.darkBlue, Colors.white],
            border: ['transparent', 'transparent'],
        },
        outline: {
            background: [Colors.white, '#FDF7F5'], // #FDF7F5 — легкий бежевый оттенок с макета
            text: [Colors.darkBlue, Colors.warmBrown],
            border: ['#EDEDED', Colors.warmBrown],
        },
    }

    const currentConfig = colorsConfig[variant]

    // Интерполяция фонового цвета
    const backgroundColor = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: currentConfig.background,
    })

    // Интерполяция цвета текста
    const fontColor = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: currentConfig.text,
    })

    // Интерполяция цвета рамки
    const borderColor = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: currentConfig.border,
    })

    const handleFade = () => {
        Animated.timing(animValue, {
            toValue: isSelect ? 1 : 0,
            duration: 150,
            useNativeDriver: false,
        }).start()
    }

    useEffect(() => {
        handleFade()
    }, [isSelect])

    const borderWidth = variant === 'outline' ? (isSelect ? 1.5 : 1) : 0

    return (
        <Pressable {...props} style={style}>
            <Animated.View
                style={[
                    styles.button,
                    {
                        backgroundColor,
                        borderColor,
                        borderWidth,
                    },
                    style,
                ]}
            >
                <Animated.Text style={[styles.text, { color: fontColor }]}>{text}</Animated.Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Spacing.s38,
        borderRadius: Radius.br12,
        paddingHorizontal: Spacing.s16,
        minWidth: Spacing.s44,
        width: '100%',
    },
    text: {
        fontSize: Fonts.fs14,
        fontWeight: '500',
    },
})

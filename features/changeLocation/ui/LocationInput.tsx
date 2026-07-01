import { StyleSheet, View, TextInput, TextInputProps } from 'react-native'
import { Spacing, Colors, Radius, Fonts } from '../../../shared/tokens'

interface LocationInputProps extends TextInputProps {
    icons?: React.ReactNode
}

export default function LocationInput({ icons, style, ...props }: LocationInputProps) {
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, props.multiline && styles.inputMultiline, style]}
                {...props}
            />
            {icons}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        position: 'relative',
    },
    input: {
        height: Spacing.s58,
        paddingLeft: Spacing.s46,
        paddingRight: Spacing.s58,
        borderRadius: Radius.br16,
        borderWidth: 1,
        borderColor: Colors.paleGray,
        fontSize: Fonts.fs16,
        color: Colors.charcoal,
        fontFamily: Fonts.regular,
    },
    inputMultiline: {
        height: 120,
        textAlignVertical: 'top',
        paddingTop: Spacing.s16,
    },
})

import { Pressable, StyleSheet, TextInput, TextInputProps, View, Image } from 'react-native'
import { Colors, Radius, Fonts, Spacing } from '../tokens'
export default function Input(props: TextInputProps) {
    return (
        <View>
            <TextInput style={styles.input} placeholderTextColor={Colors.silver} {...props} />
            <Pressable style={styles.searchIcon}>
                <Image
                    resizeMode="contain"
                    source={require('../../assets/images/icon-search.png')}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: Spacing.s58,
        backgroundColor: Colors.gray,
        paddingHorizontal: Spacing.s50,
        borderRadius: Radius.br16,
        fontSize: Fonts.fs16,
        color: Colors.silver,
        fontFamily: Fonts.regular,
    },
    searchIcon: {
        position: 'absolute',
        left: 0,
        width: 20,
        height: Spacing.s20,
        padding: Spacing.s20,
    },
})

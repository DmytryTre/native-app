import { StyleSheet, TextInput, TextInputProps, View, Image } from 'react-native'
import { Colors, Radius, Fonts, Spacing } from '../../tokens'
export default function InputSearch(props: TextInputProps) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholderTextColor={Colors.silver} {...props} />
            <View style={styles.searchIcon}>
                <Image
                    resizeMode="contain"
                    source={require('../../../assets/images/icon-search.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
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
        left: Spacing.s20,
        width: Spacing.s20,
        height: Spacing.s20,
    },
})

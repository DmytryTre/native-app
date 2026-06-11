import { Pressable, StyleSheet, TextInput, TextInputProps, View, Image } from 'react-native'
import { Colors, Radius, FontSize, Spacing } from '../tokens'
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
        height: 58,
        backgroundColor: Colors.gray,
        paddingHorizontal: Spacing.s50,
        borderRadius: Radius.br16,
        fontSize: FontSize.fs16,
        color: Colors.silver,
        fontFamily: 'SoraSans',
    },
    searchIcon: {
        position: 'absolute',
        left: 0,
        width: 20,
        height: 20,
        padding: Spacing.s20,
    },
})

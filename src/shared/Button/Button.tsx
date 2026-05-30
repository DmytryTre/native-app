import { Colors, Dimensions, FontSize, Radius } from "@/tokens";
import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";

const Button = ({text, ...props}: PressableProps & {text: string}) => {

  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.h62,
    backgroundColor: Colors.warmBrown,
    borderRadius: Radius.br16,
    
  }, 
  text: {
    fontSize: FontSize.fs16,
    color: Colors.white
  }
})
export default Button;
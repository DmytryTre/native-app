import { View, StyleSheet } from 'react-native'
import { ChangeLocationForm } from '../../../features/changeLocation/ui/ChangeLocationForm'
import { Spacing } from '../../../shared/tokens'

export default function Address() {
    return (
        <View style={styles.container}>
            <ChangeLocationForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: Spacing.s30 },
})

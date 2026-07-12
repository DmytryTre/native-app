import { StyleSheet } from 'react-native'
import { ChangeLocationForm } from '../../../features/changeLocation/ui/ChangeLocationForm'
import { Spacing } from '../../../shared/tokens'
import SafeScreenContainer from '../../../shared/ui/safeScreenContainer/SafeScreenContainer'

export default function Address() {
    return (
        <SafeScreenContainer style={styles.container}>
            <ChangeLocationForm />
        </SafeScreenContainer>
    )
}

const styles = StyleSheet.create({
    container: { paddingBottom: Spacing.s132 },
})

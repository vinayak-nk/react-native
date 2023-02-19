import { StyleSheet, View } from 'react-native'
import constants from '../../utils/constants'

function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: constants.Colors.primary800,

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
  },
})

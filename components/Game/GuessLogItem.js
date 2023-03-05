import { View, Text, StyleSheet } from 'react-native'
import constants from '../../utils/constants'

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.item}>
        #
        {roundNumber}
      </Text>
      <Text style={styles.item}>
        Opponents guess:
        {guess}
      </Text>
    </View>
  )
}

export default GuessLogItem

const styles = StyleSheet.create({
  listItem: {
    borderColor: constants.Colors.primary800,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: constants.Colors.accent500,
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  item: {
    fontFamily: 'openRegular',
  },
})

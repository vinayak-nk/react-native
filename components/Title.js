import { StyleSheet, Text } from 'react-native'
import constants from '../utils/constants'

function Title({ text }) {
  return (
    <Text style={styles.title}>{text}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: constants.Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: constants.Colors.accent500,
    padding: 12,
    borderRadius: 10,
  },
})

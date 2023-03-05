import { StyleSheet, Text, Platform } from 'react-native'
import constants from '../../utils/constants'

function Title({ text }) {
  return (
    <Text style={styles.title}>{text}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'openBold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: constants.Colors.accent300,
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 4 : 0, // android, ios, macos, web, windows
    borderWidth: Platform.select({
      ios: 0,
      android: 4,
    }),
    borderColor: constants.Colors.accent500,
    padding: 12,
    borderRadius: 10,
    width: 380,
    maxWidth: '80%',
    minWidth: '60%',
  },
})

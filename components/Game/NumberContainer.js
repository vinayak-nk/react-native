/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from 'react-native'
import constants from '../../utils/constants'

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>
        {children}
      </Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: constants.Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: constants.Colors.accent500,
    fontSize: 36,
    fontFamily: 'openBold',
    // fontWeight: 'bold',
  },
})

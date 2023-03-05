/* eslint-disable react/prop-types */
import { View, Text, StyleSheet, Dimensions } from 'react-native'
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

const deviceWidth = Dimensions.get('window').width
console.log('deviceWidth==', deviceWidth)

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: constants.Colors.accent500,
    padding: deviceWidth > 400 ? 24 : 12,
    margin: deviceWidth > 400 ? 24 : 12,
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

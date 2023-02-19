/* eslint-disable react/prop-types */
import { StyleSheet, Text } from 'react-native'
import constants from '../../utils/constants'

function InstructionText({ text, style }) {
  return (
    <Text style={[styles.instructions, style]}>{text}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
  instructions: {
    color: constants.Colors.accent500,
    fontSize: 18,
    fontWeight: '800',
  },
})

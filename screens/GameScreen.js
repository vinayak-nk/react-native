import { Text, View, StyleSheet } from 'react-native'
import { Title } from '../components'

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title text="Opponents Guess" />
      {/* Guess */}
      <View>
        <Text>Higher or lower</Text>
        {/* +- */}
      </View>
      {/* <View>Log ROUND</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})

export default GameScreen

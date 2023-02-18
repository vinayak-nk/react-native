import { Text, View } from 'react-native'

import { PrimaryButton } from '../components'

function GameScreen() {
  return (
    <View>
      <PrimaryButton>
        <Text>
          Reset
        </Text>
      </PrimaryButton>
      <PrimaryButton>
        <Text>
          Confirm
        </Text>
      </PrimaryButton>
    </View>
  )
}

export default GameScreen

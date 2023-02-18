import { TextInput, View } from 'react-native'

import { PrimaryButton } from '../components'

const GameScreen = () => {
  return (
    <View>
      {/* <TextInput /> */}
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default GameScreen

import { TextInput, View } from 'react-native'

import { PrimaryButton } from '../components'

const StartGameScreen = () => {
    return (
        <View>
            {/* <TextInput /> */}
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen

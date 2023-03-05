import {
  View, Image, StyleSheet, Text, Dimensions,
  useWindowDimensions, ScrollView,
} from 'react-native'

import { Title, PrimaryButton } from '../components'
import constants from '../utils/constants'

function StartGameScreen({ rounds, userNumber, onGameRestartHandler }) {
  const { width, height } = useWindowDimensions()

  let imageSize = 300

  if (width < 400) imageSize = 150
  if (height < 420) imageSize = 100

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <Title text="Game Over!" />
        <View style={[styles.ImageContainer, imageStyle]}>
          <Image
            source={require('../assets/images/success.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.summarytext}>
          <Text>
            Your phone needed
            {' '}
          </Text>
          <Text style={styles.highlighText}>{rounds}</Text>
          <Text>
            {' '}
            rounds to guess the number
            {' '}
          </Text>
          <Text style={styles.highlighText}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPressHandler={() => onGameRestartHandler(true)}>
          <Text>
            Restart
          </Text>
        </PrimaryButton>
      </View>
    </ScrollView>
  )
}

export default StartGameScreen

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    // width: 300,
    // height: 300,
    // height: deviceWidth > 400 ? 300 : 250,
    // width: deviceWidth > 400 ? 300 : 250,
    // borderRadius: 150,
    borderWidth: 3,
    borderColor: constants.Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summarytext: {
    fontFamily: 'openRegular',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 18,
  },
  highlighText: {
    fontFamily: 'openBold',
    color: constants.Colors.primary500,
  },
})

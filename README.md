1. packages
2. ESLint configurtion
3. Button ripple effect
4. Linear Gradient
5. Alerts
6. Background image
7. Custom fonts
8. Loading Icon
9. expo-splash-screen

# react-native
npm install -g expo-cli

npx create-expo-app .
npx expo start -a

ES Lint configuration
=======================
npm install eslint --global
npm install --save-dev eslint
npm init @eslint/config

npm install eslint-plugin-react --global 
npm install --save-dev eslint-plugin-react
npm install eslint-plugin-react-native --global 
npm install eslint-plugin-unused-imports --save-dev


button ripple effect
====================
android_ripple={{ color: 'blue' }} // anroid

style={({ pressed }) => pressed ?
  [styles.pressed, styles.buttonInnerContainer] 
  : styles.buttonInnerContainer
}

pressed: {
  opacity: 0.75
}


Linear Gradient
================
expo install expo-linear-gradient
import { LinearGradient } from 'expo-linear-gradient'
<LinearGradient colors={['#4e0329', constants.Colors.accent500]} style={styles.appContainer}>
  ...
  ...
</LinearGradient>

Alerts
================
import { Alert } from 'react-native'

Alert.alert('Wrong suggestion', 'You have clicked wrong button...', [{ text: 'sorry', style: 'cancel' }])

Background image
==================
import { ImageBackground } from 'react-native'

<ImageBackground
  source={require('./assets/images/goal.png')}
  resizeMode="contain"
  style={styles.appContainer}
  imageStyle={styles.backgoundImage}
>
  ...
  ...
</ImageBackground>


Custom fonts
==============
import { useFonts } from 'expo-font'

  const [fontsLoaded] = useFonts({
    openRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    openBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  const styles = StyleSheet.create({
    instructions: {
      color: constants.Colors.accent500,
      fontSize: 18,
      // fontWeight: '800',
      fontFamily: 'openRegular',
    },
  })


Loading Icon (Suspense fallback)
=============
import AppLoading from 'expo-app-loading'

if (!fontsLoaded) return <AppLoading />

expo-app-loading - deprecated

expo-splash-screen
====================
npx expo install expo-splash-screen
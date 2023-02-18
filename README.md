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

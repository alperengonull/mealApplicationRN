import React from 'react'
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
    <LottieView source={require('../../assets/Error.json')} autoPlay loop="false" />
  )
}

export default Error;
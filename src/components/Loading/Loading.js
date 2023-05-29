import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView source={require('../../assets/Loading.json')} autoPlay loop="false" />
  )
}

export default Loading;
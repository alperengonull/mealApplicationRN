import { Image, SafeAreaView, Text,View } from 'react-native'
import React from 'react'
import styles from './DetailCard.style'

const DetailCard = ({detail}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: detail.strMealThumb}} />
      <View style={styles.innerContainer}>
        <Text style={styles.mealName}> {detail.strMeal} </Text>
        <Text style={styles.mealArea}> {detail.strArea} </Text>
        <Text style={styles.instruction}> {detail.strInstructions} </Text>
      </View>
    </SafeAreaView>
  )
}

export default DetailCard
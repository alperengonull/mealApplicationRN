import { View, Text,ImageBackground,SafeAreaView } from 'react-native'
import React from 'react'
import styles from './MealCard.style'

const MealCard = ({meal}) => {
  return (
    <View style={styles.mealItem}>
      <ImageBackground
        source={{ uri: meal.strMealThumb }}
        style={styles.bgImage}>
        <Text style={styles.title} numberOfLines={1}>
          {meal.strMeal}
        </Text>
      </ImageBackground>
    </View>
  )
}

export default MealCard;
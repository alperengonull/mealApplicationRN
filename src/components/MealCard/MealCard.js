import {View, Text, ImageBackground, SafeAreaView, Image,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './MealCard.style';

const MealCard = ({meal,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
     <SafeAreaView style={styles.container}>
     <Image style={styles.mealImage} source={{uri:meal.strMealThumb}} />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          {meal.strMeal}
        </Text>
      </View>
     </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;

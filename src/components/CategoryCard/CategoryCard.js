import {
    SafeAreaView,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
  } from 'react-native';
  import React from 'react';
  import styles from './CategoryCard.style';
  
  const CategoryCard = ({categories, onSelect}) => {
    return (
      <TouchableWithoutFeedback onPress={onSelect}>
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: categories.strCategoryThumb}}
          />
          <Text style={styles.title}> {categories.strCategory} </Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  };
  
  export default CategoryCard;
  
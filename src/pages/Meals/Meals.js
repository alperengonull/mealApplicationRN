import {SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import styles from './Meals.style'
import Error from '../../components/Error/Error'
import Loading from '../../components/Loading/Loading'
import useFetch from '../../hooks/useFetch'
import MealCard from '../../components/MealCard/MealCard';
import {API_MEALS_URL} from '@env'

const Meals = ({route,navigation}) => {



  const {strCategory} = route.params

  // Gets the category meals
  const {data,loading,error} = useFetch(API_MEALS_URL+strCategory)

   // Animations
   if (loading) return <Loading/>
   if (error) return <Error />

  //  Navigate
  handleDetailSelect = (idMeal) => navigation.navigate('DetailsPage',{idMeal})
 
  
  const renderMeal = ({item}) => <MealCard meal={item} onSelect={() => handleDetailSelect(item.idMeal)} /> 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeal} />
    </SafeAreaView>
  )
}

export default Meals
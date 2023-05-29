import {FlatList} from 'react-native'
import useFetch from '../../hooks/useFetch.js'
import React from 'react'
import Error from '../../components/Error/Error.js'
import Loading from '../../components/Loading/Loading.js'
import CategoryCard from '../../components/CategoryCard/CategoryCard.js'
import { API_CATEGORIES_URL } from '@env';
const Categories = ({navigation}) => {


  //  Gets category meals
  const {data,loading,error} = useFetch(API_CATEGORIES_URL)


  // Navigate
  handleMealSelect = (strCategory) => navigation.navigate('MealsPage',{strCategory})

  // Animations
  if (loading) return <Loading/>
  if (error) return <Error/>

  const renderProduct = ({item}) => <CategoryCard categories={item} onSelect={() => handleMealSelect(item.strCategory)} />

  return (
        <FlatList data={data.categories} numColumns={3} renderItem={renderProduct} keyExtractor={item => item.idCategory} />
  )
}

export default Categories;
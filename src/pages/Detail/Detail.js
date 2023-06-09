import React from 'react'
import { FlatList, SafeAreaView } from 'react-native';
import {API_DETAIL_URL} from '@env'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import useFetch from '../../hooks/useFetch'
import DetailCard from '../../components/DetailCard/DetailCard'
import styles from './Detail.style'

const Detail = ({route}) => {

  const {idMeal} = route.params

  // We will check which id of meal
  // console.log(idMeal)

  const {data,loading,error} = useFetch(API_DETAIL_URL+idMeal)

  if (loading) return <Loading />
  if (error) return <Error />

  const renderCategory = ({item}) => <DetailCard detail={item}  />

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data.meals} renderItem={renderCategory} keyExtractor={item => item.idMeal} />
    </SafeAreaView>
  )
}

export default Detail
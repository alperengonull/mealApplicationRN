import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Detail/Detail'
import React from 'react';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{title:'CATEGORIES',headerTitleAlign:'center',headerTintColor:'black',headerStyle:{backgroundColor:'#f4511e'}}} />
        <Stack.Screen name="MealsPage" component={Meals} options={{title:'MEALS',headerTitleAlign:'center',headerTintColor:'black',headerStyle:{backgroundColor:'#f4511e'}}} />
        <Stack.Screen name="DetailsPage" component={Detail} options={{title:'DETAILS',headerTitleAlign:'center',headerTintColor:'black',headerStyle:{backgroundColor:'#f4511e'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';
import React from 'react';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{title:'CATEGORIES',headerTitleAlign:'center',headerTintColor:'white', statusBarColor:'#6D120d'}} />
        <Stack.Screen name="MealsPage" component={Meals} options={{title:'CATEGORIES',headerTitleAlign:'center',headerTintColor:'white', statusBarColor:'#6D120d'}} />
        <Stack.Screen name="DetailsPage" component={Detail} options={{title:'CATEGORIES',headerTitleAlign:'center',headerTintColor:'white', statusBarColor:'#6D120d'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

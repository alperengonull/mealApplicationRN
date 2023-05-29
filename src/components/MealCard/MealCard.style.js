import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ffffff',
      margin: 5,
      flexDirection: 'row',
      shadowColor:'#d9d9d9',
      shadowOpacity:1,
      shadowOffset:{
        height:1,
        width:1
      }
    },
    mealImage: {
      margin:10,
      width: 100,
      height: 100,
      borderColor:'#f4511e',
      borderWidth:2,
      borderRadius: 10,
    },
    innerContainer: {
      flex: 1,
     marginTop:15,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 16,
    },
})
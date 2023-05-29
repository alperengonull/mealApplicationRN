import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: '100%',
        height: 250,
      },
      innerContainer: {
        alignItems: 'center',
        padding: 20,
      },
      mealName: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
      },
      mealArea: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#555',
      },
      instruction: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#333',
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  });
  
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
      },
      bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
      },
      title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
      },
})
// ./Style/Theme

import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const theme = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: '#9299A3',
      alignItems: 'center',
      // paddingTop: '5%',
      width: windowWidth
    },
    text : {
      color: '#eee'
    },
    title : {
      fontFamily: 'normal',
      textAlign: 'center'
    },
    big_title : {
      fontFamily: 'normal',
      textAlign: 'center'
    },

    text_input : {
      backgroundColor: '#eee',
      width: windowWidth * 0.8,
      height: windowHeight * 0.1,
      marginTop: '5%' ,
      padding: '5%',
      fontSize: 16
    },
    button : {
      minWidth: windowWidth * 0.5,
      backgroundColor: '#737580',
      margin: '10%',
      padding: '3%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    conversation : {
      backgroundColor: '#eee',
      width: windowWidth * 0.95,
      height: windowHeight * 0.09,
      marginTop: '1%' ,
      padding: '5%',
      justifyContent : 'center',
      alignItems : 'flex-start'
    }
  });

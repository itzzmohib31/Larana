import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Buttons = (props:any) => {

  return (
    <TouchableOpacity style={styles.button} onPress={()=>props.method()} >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FF1616',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width:'60%',
      justifyContent: 'center',
      alignItems: 'center',
      margin:'auto',
      marginTop:20
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default Buttons;
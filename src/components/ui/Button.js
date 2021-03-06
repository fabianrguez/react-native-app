import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Button = (props) => {

  return (
    <LinearGradient
      colors={['#00FFFF', '#17c8ff', '#329bff', '#4c64ff', '#6536ff', '#8000ff']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => props.onPress()}
        style={styles.button}
        disabled={props.disabled | false}>
        <Text
          style={styles.text}>
          {props.label}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );

};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    margin: 5,
    alignItems: 'center'
  },
  button: {
    borderWidth: 3,
    borderColor: 'transparent',
    paddingVertical: 15,
    width: 300,
    borderRadius: 30
  },
  text: {
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});
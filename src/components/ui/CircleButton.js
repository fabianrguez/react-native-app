import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class CircleButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <LinearGradient
          colors={['#00FFFF', '#17c8ff', '#329bff', '#4c64ff', '#6536ff', '#8000ff']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.container}
        >
          <TouchableOpacity
            onPress={() => this.props.onPress()}
            style={styles.circleButton}
          >
            <Image
              style={styles.icon}
              source={this.props.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Outfit</Text>
        </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  circleButton: {
    borderRadius: 100,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderColor: 'rgba(0,0,0,0.2)'
  },
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: '600',
    color: '#cccccc'
  },
  icon: {
    height: 80
  }
});
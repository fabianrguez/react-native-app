import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CircleButton from '../ui/CircleButton';
import CameraHelper from '../../helpers/CameraHelper';

export default class Home extends Component {

  constructor(props) {
    super(props);


    this.onPressOutfit = this.onPressOutfit.bind(this);
  }

  onPressOutfit() {
    const { navigate } = this.props.navigation;
    navigate('Outfit');
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.buttonContainer}
        >
          <CircleButton
            onPress={this.onPressOutfit}
            icon={require('../../images/outfit-white.png')}
            buttonText={'Outfit'}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import CircleButton from './src/components/ui/CircleButton';
import CameraHelper from './src/helpers/CameraHelper';

export default class App extends React.Component {

  constructor(props) {
    super(props);
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
            onPress={CameraHelper.openImagePicker}
            icon={require('./src/images/outfit-white.png')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

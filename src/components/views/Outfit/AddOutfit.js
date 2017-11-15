import React, {Component} from 'react';
import {View, StyleSheet, Picker, Text, TouchableOpacity, Image} from 'react-native';
import CameraHelper from '../../../helpers/CameraHelper';
import * as ImagePicker from 'react-native-image-picker';

export default class AddOutfit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imagePath: '',
      imageWidth: '',
      imageHeight: '',
    }
  }

  openCamera() {
    const options = {
      title: 'Selecciona algo',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.showImagePicker(options, (response => {
      if (response.didCancel) {
        console.log('cancelado');
      } else if (response.error) {
        console.log('error ' + response.error);
      } else if (response.customButton) {
        console.log('custom button ' + response.customButton);
      } else {
        this.setState({
          imagePath: response.uri,
          imageWidth: response.width,
          imageHeight: response.height
        });
      }
    }));
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.openCamera()}
            style={styles.button}>
            <Text>Subir foto</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', paddingTop: 10}}>
          {this.state.imagePath ?
            <Image
              style={styles.image}
              source={{uri: this.state.imagePath}}/> : null}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    borderWidth: 3,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 30
  },
  image: {
    height: 400,
    width: 400
  }
});
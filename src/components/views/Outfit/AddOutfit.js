import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Button} from '../../ui/Button';

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
        <Button
          onPress={this.openCamera.bind(this)}
          label={'Subir foto'}
        />
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
    alignItems: 'center'
  },
  image: {
    height: 400,
    width: 400
  }
});
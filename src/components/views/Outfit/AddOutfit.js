import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Button} from '../../ui/Button';
import { RadioButtons } from 'react-native-radio-buttons'

export default class AddOutfit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imagePath: '',
      imageWidth: '',
      imageHeight: '',
      selectedOption: '',
      uploadButtonDisabled: true
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

  setSelectedOption(selectedOption) {
    this.setState({
      selectedOption: selectedOption,
      uploadButtonDisabled: false
    });
  }

  render() {
    const selectOptions = [
      'Pantalon',
      'Camisa',
      'Zapatos',
      'Falda',
      'Gorro'
    ];

    function renderOption(option, selected, onSelect, index){
      const style = selected ? { fontWeight: 'bold', fontSize: 17} : {fontSize: 15};
      const buttonStyle = {
        borderRadius: 30,
        borderWidth: 1,
        paddingHorizontal: 100,
        paddingVertical: 10,
        margin: 10
      };

      return (
        <TouchableOpacity
          style={buttonStyle}
          onPress={onSelect}
          key={index}>
          <Text style={style}>{option}</Text>
        </TouchableOpacity>
      );
    }

    function renderContainer(optionNodes){
      return <View>{optionNodes}</View>;
    }

    return (
      <View
        style={styles.container}
      >
        <Text style={styles.text}> Selecciona el tipo de prenda </Text>
        <RadioButtons
          options={selectOptions}
          onSelection={this.setSelectedOption.bind(this)}
          selectedOption={this.state.selectedOption}
          renderOption={renderOption}
          renderContainer={renderContainer}
        />
        <Button
          onPress={this.openCamera.bind(this)}
          label={'Subir foto'}
          disabled={this.state.uploadButtonDisabled}
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
    height: 275,
    width: 400
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25
  }
});
import ImagePicker from 'react-native-image-picker';

export default class CameraHelper {

  static openImagePicker() {
    let photo = {
      imagePath: '',
      imageWidth: '',
      imageHeight: ''
    };
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
        photo = {
          imagePath: response.uri,
          imageWidth: response.width,
          imageHeight: response.height
        };
      }
    }));
    return photo;
  }

}
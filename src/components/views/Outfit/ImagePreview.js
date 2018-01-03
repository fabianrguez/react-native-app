import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Platform, ActivityIndicator} from 'react-native';
import {Button} from '../../ui/Button';
import RNFetchBlob from 'react-native-fetch-blob';
import {firebase} from '../../../config/firebaseConfig';
import ImageHelper from '../../../helpers/ImageHelper';
import ImageResizer from 'react-native-image-resizer';
import {NavigationActions} from 'react-navigation';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

window.Blob = Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;

function uploadImage(uri, image, mime = 'image/jpg') {
  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    let uploadBlob = null;
    const imageRef = firebase.storage().ref('image').child(image);
    fs.readFile(uploadUri, 'base64')
      .then(data => {
        return Blob.build(data, {type: `${mime};BASE64`})
      })
      .then(blob => {
        uploadBlob = blob;
        return imageRef.put(blob, {contentType: mime});
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then(url => {
        resolve(url);
      })
      .catch(error => {
        reject(error);
      })
  });
}

export default class ImagePreview extends Component {

  constructor(props) {
    super(props);
    const {params} = this.props.navigation.state;
    this.state = {
      path: params.image,
      type: params.type,
      uploading: false
    };

    ImageResizer.createResizedImage(this.state.path, 400, 275, 'JPEG', 75)
      .then(({uri}) => {
        this.setState({path: uri});
    }).catch((err) => {

    });
  }

  renderImage() {
    return(
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{uri: this.state.path}}/>
      </View>
    )
  }

  save() {
    this.setState({uploading: true});
    uploadImage(this.state.path, new Date().getTime() + '.jpg')
      .then(response => {
        ImageHelper.setImageUrl(new Date().getTime(), this.state.type ,response);
        this.setState({uploading: false});
        const resetActions = NavigationActions.reset({
          index: 1,
          actions: [
            NavigationActions.navigate({routeName: 'Home'}),
            NavigationActions.navigate({routeName: 'Outfit'})
          ]
        });
        this.props.navigation.dispatch(resetActions);
      })
      .done()
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}> {this.state.type}</Text>
        {this.state.path ? this.renderImage() : null}
        <Button
          onPress={() => this.save()}
          label={'Guardar'}
        />
        <View style={styles.loadingWrapper}>
          <ActivityIndicator
            animating={this.state.uploading}
            size={'large'}
            color={'violet'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingWrapper: {
    flex: 1
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 275,
    width: 400,
    borderRadius: 10
  },
  title: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  }
});
import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';

export default class CreateOutfit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        'https://firebasestorage.googleapis.com/v0/b/esmemapp.appspot.com/o/image%2F1511698107083.jpg?alt=media&token=c7cd956d-3574-4de7-ac40-86a640bc1e1f',
        'https://firebasestorage.googleapis.com/v0/b/esmemapp.appspot.com/o/image%2F1511698128511.jpg?alt=media&token=e53a0af7-cb5c-4b2c-8078-996172a6b3d0',
        'https://firebasestorage.googleapis.com/v0/b/esmemapp.appspot.com/o/image%2F1511698107083.jpg?alt=media&token=c7cd956d-3574-4de7-ac40-86a640bc1e1f'
      ]
    }
  }

  _renderItem({item, index}) {
    console.log(item);
    return(
      <View>
        <Image
          source={{uri: item}}
          style={{width: 300, height: 200}}
        />
      </View>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <Carousel
          data={this.state.data}
          renderItem={this._renderItem}
          sliderWidth={400}
          itemWidth={300}
          autoplay={true}
          lockScrollWhileSnapping={true}
          enableMomentum={false}
          apparitionDelay={0}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
});
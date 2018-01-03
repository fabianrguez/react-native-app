import React, {Component} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {firebase} from '../../../config/firebaseConfig';
import * as _ from 'lodash';

export default class CreateOutfit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gorros: []
    }
  }

  componentWillMount() {
    firebase.database().ref().child('Gorro').on('value', (data) => {
      this.setState({gorros: _.values(data.val())})
    });
  }

  _renderItem({item, index}) {
    return(
      <View>
        <Image
          source={{uri: item}}
          style={{width: 300, height: 200, borderRadius: 10}}
        />
      </View>
    )
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <View>
          <Carousel
            data={this.state.gorros}
            renderItem={this._renderItem}
            sliderWidth={400}
            itemWidth={300}
            apparitionDelay={0}
            onSnapToItem={(index) => {console.log(index)}}
          />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  }
});
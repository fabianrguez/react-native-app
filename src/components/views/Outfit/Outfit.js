import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Outfit extends Component {

  constructor(props) {
    super(props);

    this.onAddPrenda = this.onAddPrenda.bind(this);
  }

  onAddPrenda() {
    const { navigate } = this.props.navigation;
    navigate('AddOutfit');
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TouchableOpacity
          onPress={this.onAddPrenda}
          style={styles.button}
        >
          <Text>Añadir prenda</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  button: {
    borderWidth: 3,
    borderColor: '#ccc',
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 20
  }

});
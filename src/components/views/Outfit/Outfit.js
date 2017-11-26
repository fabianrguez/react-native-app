import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../ui/Button';

export default class Outfit extends Component {

  constructor(props) {
    super(props);

    this.onAddPrenda = this.onAddPrenda.bind(this);
    this.onCreateOutfit = this.onCreateOutfit.bind(this);
  }

  onAddPrenda() {
    const { navigate } = this.props.navigation;
    navigate('AddOutfit');
  }

  onCreateOutfit() {
    const { navigate } = this.props.navigation;
    navigate('CreateOutfit');
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <Button
          onPress={this.onAddPrenda}
          label={'Añadir prenda'}
        />
        <Button
          onPress={() => {}}
          label={'Ver Outfits'}
        />
        <Button
          onPress={this.onCreateOutfit}
          label={'Crear Outfits'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

});
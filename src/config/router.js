import React from 'react';
import Home from '../components/views/Home';
import Outfit from '../components/views/Outfit/Outfit';
import AddOutfit from '../components/views/Outfit/AddOutfit';
import {StackNavigator} from 'react-navigation';

export const Router = StackNavigator({
  Home: {
    screen: Home
  },
  Outfit: {
    screen: Outfit
  },
  AddOutfit: {
    screen: AddOutfit
  }
}, {
  headerMode: 'none'
});
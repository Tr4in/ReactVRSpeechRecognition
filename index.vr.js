import React from 'react';
import ShopUI from './components/shopui.js';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  NativeModules
} from 'react-vr';

export default class VRShop extends React.Component {

  render() {
    return (
      <View>
        <Pano source={asset('newbackground.jpg')} />
        <ShopUI />
      </View>
    );
  }
};

AppRegistry.registerComponent('VRShop', () => VRShop);

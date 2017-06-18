import React,{PropTypes} from 'react';
import PakIcon from './pakicon.js';
import Room from './room.js';

import {
  AppRegistry,
  asset,
  Text,
  View,
  Plane,
  PointLight
} from 'react-vr';

export default class ShopUI extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      iconsActive: true
    };
  }

  render() {

    return (
      <View style={{
        transform: [{ translate: [ 0, 0.4, -2.7 ] }],
      }}>
        <View onEnter={ () => this.setState({ iconsActive: true }) } onExit={ () => this.setState({ iconsActive: false }) }>
          <PakIcon x={0} enableSpeaking={ this.state.iconsActive } />
        </View>
      </View>
    );
  }
};

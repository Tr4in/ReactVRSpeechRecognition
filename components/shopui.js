import React,{PropTypes} from 'react';
import PakIcon from './pakicon.js';
import {
  AppRegistry,
  asset,
  Text,
  View,
  Plane,
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
        transform: [{ translate: [0, 0.4, -2.7] }],
      }}>

        <View onEnter={ () => this.setState({ iconsActive: true }) } onExit={ () => this.setState({ iconsActive: false }) }>
          <PakIcon x={0} enableSpeaking={ this.state.iconsActive } />
        </View>

        <Plane dimWidth={10} dimHeight={10} texture={ asset("texture.png") } style={{
          color: 'gray',
          transform: [{ translate: [-2.5, -1.5, 0]}, {rotateX: -90}]
        }}/>
      </View>
    );
  }
};

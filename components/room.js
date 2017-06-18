import React,{PropTypes} from 'react';
import PakIcon from './pakicon.js';
import {
  AppRegistry,
  asset,
  Text,
  View,
  Plane,
} from 'react-vr';

export default class Room extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      iconsActive: true
    };
  }

  render() {

    return (
      <View>

        <Plane dimWidth={10} dimHeight={10} texture={ asset("texture.png") } style={{
          color: 'gray',
          transform: [{ translate: [-2.5, -1.5, 0]}, {rotateX: -90}]
        }}/>

        <Plane dimWidth={10} dimHeight={10} texture={ asset("texture.png") } style={{
          color: 'gray',
          transform: [{ translate: [-2.5, -1.5, 0]}]
        }}/>

        <Plane dimWidth={10} dimHeight={10} texture={ asset("texture.png") } style={{
          color: 'gray',
          transform: [{ translate: [-2.5, -1.5, 0]}, {rotateX: -90}]
        }}/>

        <Plane dimWidth={10} dimHeight={10} texture={ asset("texture.png") } style={{
          color: 'gray',
          transform: [{ translate: [-2.5, -1.5, -1]}]
        }}/>
      </View>
    );
  }
};

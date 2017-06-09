import React,{Component} from 'react';

import {
  asset,
  Text,
  Image,
  View,
  VrButton
} from 'react-vr';

export default class InteractionButton extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={{
          position: 'absolute',
        }}>

        <Text style={{
          fontSize: 0.2,
          backgroundColor: '#2c58e8',
          color: 'white',
          textAlign: 'center',
          textAlignVertical: 'center',
          fontWeight: 'bold',
        }}>
          BUY
        </Text>
        </View>
      );
    }
}

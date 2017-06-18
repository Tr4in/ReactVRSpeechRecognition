import React,{PropTypes} from 'react';
import PakIcon from './pakicon.js';

import {
  AppRegistry,
  asset,
  Text,
  View,
} from 'react-vr';

export default class SpeechResults extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{
        transform: [{ translate: [ -0.1, 0.5, 0 ] }],
      }}>

        <Text style={{
          color: 'red',
          fontWeight: 'bold',
          fontSize: 0.5,
          textAlign: 'center',
          layoutOrigin: [ 0, 0 ]
        }}>
          {this.props.results}
        </Text>
      </View>
    );
  }
};

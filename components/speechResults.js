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
        transform: [{ translate: [ 0.2, -0.8, 0 ] }],
      }}>

        <Text style={{
          color: 'red',
          fontWeight: 'bold',
          fontSize: 0.3,
          textAlign: 'center',
          layoutOrigin: [ 0, 0 ]
        }}>
          {this.props.results}
        </Text>
      </View>
    );
  }
};

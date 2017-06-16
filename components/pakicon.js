import React,{Component} from 'react';
import SpeechRecognition from './speechrecognition.js';
import SpeechResults from './speechResults.js';

import {
  asset,
  Text,
  Image,
  View,
} from 'react-vr';

export default class PakIcon extends React.Component {

    constructor(props) {
      super(props);

      // State init
      this.state = {
        spokenWords: ''
      };

    }

    speechRetriever(event) {
      this.setState({ spokenWords: event });
    }

    render() {
      const microphoneSymbol = this.props.enableSpeaking ? <SpeechRecognition x={0} speaking={this.props.enableSpeaking} outputHandler={this.speechRetriever.bind(this)} /> : null;

      return (
        <View style={{
          position: 'absolute',
          transform: [{ translate: [ -0.5, 0.5, 0 ] }]
        }}>

          <Image source={ asset('menu.png') } style={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'visible',
            layoutOrigin: [ 0, 0 ],
            transform: [{ translate: [ this.props.x, 0, 0 ] }]
          }} />

          { microphoneSymbol }

          <SpeechResults results={ this.state.spokenWords } />
        </View>
      );
    }

}

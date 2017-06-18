import React,{ Component } from 'react';
import SpeechResults from './speechResults.js'
import {
  asset,
  Text,
  Image,
  View,
  NativeModules,
  Animated,
} from 'react-vr';

export default class SpeechRecognition extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        interactionActive: true,
        annyang: NativeModules.Annyang,
        animationValue: new Animated.Value(0),
        imageSource: 'microphone.png'
      }
    }

    componentDidMount() {
      Animated.timing(
      this.state.animationValue,
          {toValue: 1},
      ).start();
    }

    async onGazeEnter() {
      try {
        console.log('Active');

        // Load the emoji image
        this.setState({ imageSource: 'listenemoji.png' });

        // Start capturing voice
        var output = await this.state.annyang.start();

        if(output) {
          this.setState({ interactionActive: false });
          this.props.outputHandler(output.toUpperCase());
        }

        // Stop
        this.state.annyang.stop();

      } catch(e) { console.log(e); }
    }

    render() {
      var output = null;

      if(this.state.interactionActive) {
        output = (
          <Animated.Image source={ asset(this.state.imageSource) } style={{
            width: 0.5,
            height: 0.6,
            overflow: 'visible',
            transform: [{ translate: [ this.props.x, -1.35, 0 ] }]
          }} />
        );
      }

      return (
        <View onEnter={ this.onGazeEnter.bind(this) }
              style={{
                position: 'absolute',
                transform: [{ translate: [ 0.25, 0.5, 0 ] }]
          }}>
          {output}
        </View>
      );
    }

}

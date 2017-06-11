import React,{Component} from 'react';
import InteractionButton from './interactionbutton.js';
import {
  asset,
  Text,
  Image,
  View,
  NativeModules
} from 'react-vr';

export default class Product extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        interactionActive: false,
        annyang: NativeModules.Annyang
       }
    }

    async onGazeEnter() {
      try {
      this.setState({ interactionActive: true });
      console.log('Active');

      var output = await this.state.annyang.start()
      console.log("Output:" + output);

    } catch(e) { console.log(e); }
    }

    onGazeOut() {
      this.setState({ interactionActive: !this.state.interactionActive });
      console.log('Not Active')
      this.state.annyang.stop()
    }

    render() {

      var output;
      if(this.state.interactionActive)
        output = <InteractionButton />
      return (
        <View onEnter={this.onGazeEnter.bind(this)} onExit={this.onGazeOut.bind(this)}
        style={{
          position: 'absolute',
          transform: [{ translate: [0, 0.5, 0] }]
        }}>

          <Image source={asset('furzkissen.jpg')} style={{
            width: 2,
            height: 1,
            overflow: 'visible',
            borderRadius: 0.2,
            transform: [{ translate: [ this.props.x, 0, 0] }]
          }}>

          {output}

          </Image>
        </View>
      );
    }

}

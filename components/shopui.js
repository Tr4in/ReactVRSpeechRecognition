import React,{PropTypes} from 'react';
import Product from './product.js';
import InteractionButton from './interactionbutton.js';


import {
  AppRegistry,
  asset,
  Text,
  View,
  Plane,
  Sound,
  Sphere,
  Box,
  NativeModules,
} from 'react-vr';

class ShopUI extends React.Component {

  render() {
    return (
      <View style={{
        transform: [{translate: [0, 0.5, -3]}],
      }}>
      <Sound volume={70} source={asset('shop_music.mp3')}
      style={{
        transform: [{ translate: [0,1,-3] }]
      }}/>

      <Text style={{
        position: 'absolute',
        fontSize: 0.5,
        fontWeight: 'bold',
        transform: [{translate: [0, 1, 0]}],
        layoutOrigin: [0.5, 0]
      }}>
        MillientX VRSHOP
      </Text>

      <Text style={{
        position: 'absolute',
        fontSize: 0.5,
        fontWeight: 'bold',
        transform: [{translate: [0, 1.5, 0]}],
        layoutOrigin: [0.5, 0]
      }}>

      </Text>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          width: 4,
          alignItems: 'stretch',
          layoutOrigin: [0.6, 0.0]
        }}>

          <View style={{ margin: 0.2 }}>
            <Product x={0} name="Paper" />
          </View>

          <View style={{ margin: 0.2 }}>
            <Product x={2} name="LostPaki" />
          </View>

        </View>

        <Plane dimWidth={10} dimHeight={10} style={{
          color: 'gray',
          transform: [{ translate: [-2.5,-0.5,0]},
        {rotateX: -90}]
        }}/>
      </View>
    );
  }
};

export default ShopUI

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Canvas from './components/Canvas';
export default class HelloVR extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      src: './chess-world.jpg'
    }
  }


  render() {
    return (
      <View>
        <Canvas src={this.state.src}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('HelloVR', () => HelloVR);

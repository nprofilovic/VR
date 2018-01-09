import React from 'react';
import {asset, Image, View, VrButton} from 'react-vr';

class Button extends React.Component {

  onButtonClick(){
    this.props.onClick();
  }

  render(){
    return(
      <View style = {{
        alignItems: 'centar',
        flexDirection: 'row',
        margin: 0.0125,
        width: 0.7
      }}>

      </View>
    );
  }
}

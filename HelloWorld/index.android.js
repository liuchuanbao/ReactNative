/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, Image,View } from 'react-native';
/**
* 自定义的的组件，
*/

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class HelloWorld extends Component {
  render() {
   let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
	<View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
		 <Image source={pic} style={{width: 193, height: 110}} />
      </View>
     

    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

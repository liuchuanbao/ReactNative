/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text,View ,Navigator} from 'react-native';

// ./MyScene表示的是当前目录下的MyScene.js文件，也就是我们刚刚创建的文件
// 注意即便当前文件和MyScene.js在同一个目录中，"./"两个符号也是不能省略的！
// 但是.js后缀是可以省略的

import MyScene from './MyScene'
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
// <MyScene />
// <Greeting name='自定义组件' />
//     <Greeting name='Jaina' />
//     <Greeting name='Valeera' />
class HelloWorld extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ title: 'My Initial Scene', index: 0 }}
            renderScene={(route, navigator) =>
                <MyScene
                    title={route.title}

                    // Function to call when a new scene should be displayed
                    onForward={ () => {
                        const nextIndex = route.index + 1;
                        navigator.push({
                            title: 'Scene ' + nextIndex,
                            index: nextIndex,
                        });
                    }}

                    // Function to call to go back to the previous scene
                    onBack={() => {
                        if (route.index > 0) {
                            navigator.pop();
                        }
                    }}
                />
            }
        />
    )
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

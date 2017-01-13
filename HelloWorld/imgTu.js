/**
 * Created by liuchuanbao on 2017/1/13.
 */
import React, { Component } from 'react';
import { View,Text,Image } from 'react-native';

export default class imgTu extends Component {

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <Text>Hi! My name is 图片.</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
            </View>
        )
    }
}
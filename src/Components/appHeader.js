import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet
} from 'react-native';

import {Button,Header,Left,Body,Right,Title,Icon} from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
          <Body style={styles.container}>
            <Image source={require('../img/supermaket.png')} style={{width:150, height:45}}/>
          </Body>
      </Header>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  }
});

module.export = AppHeader;

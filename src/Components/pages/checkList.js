import React, { Component } from 'react';
import {
  Text,
  Image,
  StyleSheet
} from 'react-native';

import {Button,Header,Left,Body,Right,Title,Icon, Content} from 'native-base';

export default class CheckList extends Component {
  render() {
    return (
      <Content style={{marginTop:75}}>
          <Text> Here is the list of the fruits</Text>
      </Content>     
    );
  }
}



module.export = CheckList;

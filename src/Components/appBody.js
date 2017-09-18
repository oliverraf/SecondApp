import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList
 } from 'react-native';

 import {Content} from 'native-base';
 import AppBodyData from './appBodyData';

export default class AppBody extends Component {
 
 
  render() {
 
    return (
      <Content> 
         <AppBodyData/>
      </Content>
      
    );
  }
}



module.export = AppBody;


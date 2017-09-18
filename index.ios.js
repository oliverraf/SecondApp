/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
 } from 'react-native';

import {Container,StyleProvider} from 'native-base'

import SmTheme from './src/Theme/variables/SmTheme';
import getTheme from './src/Theme/components';

import AppHeader from './src/Components/appHeader';
import AppFooter from './src/Components/appFooter';
import AppBody from './src/Components/appBody';

export default class SecondApp extends Component {
  render() {
    return (
     <StyleProvider style={getTheme(SmTheme)}> 
      <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
     </StyleProvider> 
    );
  }
}



AppRegistry.registerComponent('SecondApp', () => SecondApp);

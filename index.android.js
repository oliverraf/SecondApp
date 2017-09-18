/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
 } from 'react-native';



import {Container,StyleProvider} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';

import SmTheme from './src/Theme/variables/SmTheme';
import getTheme from './src/Theme/components';

import AppHeader from './src/Components/appHeader';
import AppFooter from './src/Components/appFooter';
import AppBody from './src/Components/appBodyData';

import CheckList from './src/Components/pages/checkList';
import AddProduct from './src/Components/pages/addProduct';

export default class SecondApp extends Component {
  render() {
    return (
     <StyleProvider style={getTheme(SmTheme)}> 
      <Container>
        <AppHeader/>
        <Router>
            <Scene key="products" component={AppBody} title='Products' hideNavBar={true}/>
            <Scene key="checklist" component= {CheckList} title='Check List' hideNavBar={false}/>
            <Scene key="addproduct" component={AddProduct} title='Add Product' hideNavBar={false}/>
        </Router>
        <AppFooter/>
      </Container>
     </StyleProvider> 
    );
  }
}



AppRegistry.registerComponent('SecondApp', () => SecondApp);

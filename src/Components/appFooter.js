import React, { Component } from 'react';

import {Footer,FooterTab,Button,Text,Badge,Icon} from 'native-base';

import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
  render() {
    return (
          <Footer>
            <FooterTab> 
              <Button active onPress={Actions.products}>
                <Icon name= 'clipboard' />
                <Text>Products</Text>
              </Button>
              <Button active onPress={Actions.checklist}>
              <Icon name= 'book' />
                <Text>Check List</Text>
              </Button>
              <Button active onPress={Actions.addproduct}>
              <Icon name= 'cart' />
                <Text>Add Products</Text>
              </Button>
            </FooterTab>
          </Footer>   
    );
  }
}

module.export = AppFooter;
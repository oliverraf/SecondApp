import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SectionList,
  ListView
 } from 'react-native';

 import * as firebase from 'firebase';
 import {Content} from 'native-base';

 const firebaseConfig = {
  apiKey: "AIzaSyAV2fAA4KTKJK-ABHsmjjNPUXlOjLHfFZ8",
  authDomain: "shoppinglist-7711f.firebaseapp.com",
  databaseURL: "https://shoppinglist-7711f.firebaseio.com",
  projectId: "shoppinglist-7711f",
  storageBucket: "shoppinglist-7711f.appspot.com"
 }

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class AppBodyData extends Component {
 constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      itemDataSource: ds
    }

    this.itemsRef = this.getRef().child('items');

    this.renderRow  = this.renderRow.bind(this);
    this.pressRow  = this.pressRow.bind(this);
 }
  
 getRef(){
   return firebaseApp.database().ref();
 }

 componentWillMount(){
   this.getItems(this.itemsRef);
 }
 
 getItems(itemsRef){
  itemsRef.on('value', (snap) => {
      let items = [];
      snap.foreach((child) => {
          items.push({
            title: child.val().title,
            _key: child.key
          });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
  });

 
 });
 
}

pressRow(item){

}

renderRow(item){
  return(
     <View style = {styles.li}>
       <Text style = {styles.liText}>{item.title}</Text>
      </View> 
  )
}
 
render() {
        
    return (
     <Content>
      <ListView 
        dataSource = {this.state.itemDataSource}
        renderRow = {this.renderRow}
        />               
    </Content>   
    );
  }

}

const styles = StyleSheet.create({
  li: {
    backgroundColor:'purple',
    borderBottomColor:'orange',
    borderColor:'transparent',
    paddingLeft:16,
    paddingTop:14,
    paddingBottom:16,
    },
    liText:{
     color:"blue",
     fontSize: 16, 
    },
    
  });

module.export = AppBodyData;

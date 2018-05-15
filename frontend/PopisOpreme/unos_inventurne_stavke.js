import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import BarcodeScannerApp from './BarcodeScannerApp' ;
import {StackNavigator,} from 'react-navigation';

type Props = {};
export default class unos_inventurne_stavke extends Component<Props> {
/*  static navigationOptions =
   {
      title: 'MainActivity',
   };
  FunctionToOpenSecondActivity = () =>
  {
    this.props.navigation.navigate('SecondActivity');

  }*/
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Unos inventurne stavke
        </Text>
        <View style={styles.skenirajbtn}>
            <Button title={'SKENIRAJ'} /*onPress = { this.FunctionToOpenSecondActivity }*/ />
        </View>
        <View style={styles.barkod}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 2, textAlign:'center'}}
              placeholder={'*barkod*'}
              editable={false}
              maxLength = {12}
            />
        </View>
        <View style={styles.rucniunosbtn}>
            <Button
              title={'RUČNI UNOS'}
            />
        </View>
        <View style={styles.barkod}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 2, textAlign:'center'}}
              placeholder={'*barkod*'}
              editable={false}
              maxLength = {12}
            />
        </View>
         <View style={styles.evidentirajbtn}>
            <Button
              title={'EVIDENTIRAJ INVENTURNU STAVKU'}
              color="#008000"
            />
        </View>
      </View>
    );
  }
}
/*export default Project = StackNavigator(
{
 First: { screen: MainActivity },

 Second: { screen: SecondActivity }
});*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  skenirajbtn: {
    width: 300,
    marginTop: 50,
  },
  rucniunosbtn: {
    width: 300,
    marginTop: 50,
  },
  evidentirajbtn: {
    width: 300,
    marginTop: 100,
  },
  barkod: {
    marginTop: 50,
    width: 250,
  }
});

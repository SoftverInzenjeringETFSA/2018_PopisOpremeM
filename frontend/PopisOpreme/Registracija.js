import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
} from 'react-native';



export default class Registracija extends Component{
  render() {
    return (<View style={styles.container}>
        <Text style={styles.welcome}>
            Novi korisnik
        </Text>
        <View style={styles.input}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 2, textAlign:'center'}}
              placeholder={'Username'}
              editable={true}
              maxLength = {12}
            />
        </View>
        <View style={styles.input}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 2, textAlign:'center'}}
              placeholder={'Password'}
              editable={true}
              maxLength = {12}
            />
        </View>
        <View style={styles.input}>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 2, textAlign:'center'}}
              placeholder={'Tip korisnika'}
              editable={true}
            />
        </View>
        <View style={styles.btn}>
            <Button
              title={'DODAJ'}
              color="#008000"
            />
        </View>
         <View style={styles.btn}>
            <Button
              title={'ODUSTANI'}
              color="#ff0000"
            />
        </View>
      </View>);
  }
}
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
  btn: {
    width: 300,
    marginTop: 60,
  },
  input: {
    marginTop: 50,
    width: 250,
  }
});
